"use client";
import { Navbar } from "@/components/Navbar";
import { Info, Users, Target, Award, Zap, Shield } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Active Users", value: "10K+", icon: Users },
    { label: "Projects Completed", value: "500+", icon: Target },
    { label: "Success Rate", value: "99.9%", icon: Award },
    { label: "Uptime", value: "99.99%", icon: Zap },
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption and compliance certifications.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance with sub-second response times and global CDN.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Seamless collaboration tools designed for modern distributed teams.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Purpose-built to help you achieve your objectives efficiently and effectively.",
    },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "15+ years building scalable platforms",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Former Google engineer, AI specialist",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Award-winning UX designer",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl mb-8 backdrop-blur-sm border border-white/10">
              <Info className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent mb-6">
              About Our Platform
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing how teams collaborate and manage their
              workflows. Built by developers, for developers, with
              enterprise-grade reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/10">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We believe that great software should empower teams to do their
                best work. Our platform eliminates friction, enhances
                collaboration, and provides the tools necessary for modern teams
                to thrive in a digital-first world.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Since our founding, we've been committed to building not just
                software, but solutions that scale with your ambitions and adapt
                to your unique workflows.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-slate-300">
                      Innovation-driven development
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-slate-300">
                      User-centric design philosophy
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-slate-300">
                      Enterprise-grade security
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    <span className="text-slate-300">24/7 global support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Built on cutting-edge technology with a focus on performance,
              security, and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/5 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-400">
              Passionate individuals building the future of team collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/10 group-hover:border-white/20 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-3 font-medium">{member.role}</p>
                <p className="text-slate-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of teams already using our platform to streamline
            their workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:transform hover:scale-105 shadow-lg shadow-blue-600/25">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-white/10 hover:border-white/20">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
