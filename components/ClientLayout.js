"use client";

import dynamic from "next/dynamic";

// Dynamically import InstallPWA with no SSR
const InstallPWA = dynamic(() => import("@/components/InstallPWA"), {
  ssr: false,
  loading: () => null, // Optional: return null while loading
});

export default function ClientLayout() {
  return (
    <>
      <InstallPWA />
    </>
  );
}
