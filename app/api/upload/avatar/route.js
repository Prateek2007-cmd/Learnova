import { NextResponse } from "next/server";
import { del } from "@vercel/blob";
import { requireAuth } from "@/lib/rbac";
import { checkRateLimit } from "@/lib/rateLimit";
import {
  extractImageFileFromFormData,
  uploadAvatarToBlob,
  updateUserImageInDb,
} from "@/lib/images/imagesService";

export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const POST = async (request) => {
  try {
    console.log("Avatar upload endpoint called");
    
    const decodedToken = await requireAuth(request);
    console.log("User authenticated:", decodedToken.uid);
    
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    
    const rateLimitResult = await checkRateLimit(
      `avatar_upload_${ip}_${decodedToken.uid}`
    );
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 }
      );
    }

    console.log("Extracting form data...");
    const formData = await request.formData();
    const file = extractImageFileFromFormData(formData);

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    console.log("File received:", file.name, file.size, file.type);

    if (file.size <= 0) {
      return NextResponse.json(
        { error: "File is empty" },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File size exceeds 5MB limit" },
        { status: 400 }
      );
    }

    const { blobUrl } = await uploadAvatarToBlob({
      file,
      uid: decodedToken.uid,
    });

    try {
      await updateUserImageInDb({
        firebaseUid: decodedToken.uid,
        imageUrl: blobUrl,
        faceDescriptor: null,
      });
    } catch (error) {
      await del(blobUrl).catch(() => {});
      throw error;
    }

    console.log("Avatar saved successfully to database");
    
    return NextResponse.json(
      { 
        success: true, 
        url: blobUrl,
        message: "Avatar uploaded successfully" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Avatar upload error:", {
      message: error?.message,
      stack: error?.stack,
      name: error?.name,
    });
    
    // Return specific error messages
    if (error.message && error.message.includes("Unauthorized")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    if (error.statusCode && error.statusCode < 500) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to upload avatar" },
      { status: 500 }
    );
  }
};
