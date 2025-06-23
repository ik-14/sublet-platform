"use client";

import Link from "next/link";
import { useState } from "react";
import { Building, GraduationCap, MapPin, Users, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">DormShare</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("for-universities")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              For Universities / Hosts
            </button>
            <button
              onClick={() => scrollToSection("for-students")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              For Students
            </button>
            <Button
              onClick={scrollToWaitlist}
              size="sm"
              className="rounded-full bg-gray-900 hover:bg-gray-800"
            >
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-white/95 border-t border-gray-200/50">
            <div className="container py-4 space-y-3">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("for-universities")}
                className="block w-full text-left text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                For Universities / Hosts
              </button>
              <button
                onClick={() => scrollToSection("for-students")}
                className="block w-full text-left text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                For Students
              </button>
              <Button
                onClick={scrollToWaitlist}
                size="sm"
                className="rounded-full w-full mt-4 bg-gray-900 hover:bg-gray-800"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-6 text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
                Student Dorm Subletting,{" "}
                <span className="text-primary">Simplified</span>
              </h1>
              <p className="max-w-2xl text-xl text-gray-600 leading-relaxed">
                Your new favorite platform for affordable student housing during
                internships and short stays.
              </p>
            </div>
          </div>
        </section>

        <section id="waitlist" className="py-16" style={{ paddingTop: 0 }}>
          <div className="container px-4 md:px-6">
            <div className="max-w-lg mx-auto">
              <div className="backdrop-blur-sm bg-white/80 border border-gray-200/50 rounded-2xl p-8 shadow-lg">
                <div className="space-y-6 text-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Join our waitlist
                    </h2>
                    <p className="text-gray-600">
                      Join 1,396 others on the waitlist.
                    </p>
                  </div>
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="backdrop-blur-sm bg-white/60 border border-gray-200/50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    How It Works
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Our platform connects students and universities with those
                    looking for affordable short-term housing.
                  </p>
                </div>
                <HowItWorks />
              </div>
            </div>
          </div>
        </section>

        <section id="for-universities" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="backdrop-blur-sm bg-white/60 border border-gray-200/50 rounded-2xl p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                    For Universities / Hosts
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Maximize your dormitory resources
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Turn vacant dorm rooms during breaks into revenue
                    opportunities. Help students find affordable housing while
                    generating additional income for your institution.
                  </p>
                  <div className="grid gap-8 md:grid-cols-3 mt-12">
                    <div className="text-center space-y-3">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        Utilize Empty Dorms
                      </h3>
                      <p className="text-sm text-gray-600">
                        Make money from vacant rooms during breaks
                      </p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        Support Students
                      </h3>
                      <p className="text-sm text-gray-600">
                        Help students find internship housing
                      </p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        Generate Revenue
                      </h3>
                      <p className="text-sm text-gray-600">
                        Create additional income streams
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={scrollToWaitlist}
                    className="rounded-full mt-8 bg-gray-900 hover:bg-gray-800"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="for-students" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="backdrop-blur-sm bg-white/60 border border-gray-200/50 rounded-2xl p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                    For Students
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Affordable housing for your internship
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Find budget-friendly accommodation in university dorms when
                    you need it most. Perfect for summer internships, short
                    courses, or temporary stays.
                  </p>
                  <div className="grid gap-8 md:grid-cols-3 mt-12">
                    <div className="text-center space-y-3">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        Save Money
                      </h3>
                      <p className="text-sm text-gray-600">
                        Pay less than traditional housing
                      </p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        Prime Locations
                      </h3>
                      <p className="text-sm text-gray-600">
                        Stay close to campus and city centers
                      </p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Connect</h3>
                      <p className="text-sm text-gray-600">
                        Meet other students and interns
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={scrollToWaitlist}
                    className="rounded-full mt-8 bg-gray-900 hover:bg-gray-800"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="backdrop-blur-sm bg-white/60 border border-gray-200/50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-gray-600">
                    Find answers to common questions about our platform.
                  </p>
                </div>
                <FAQ />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="backdrop-blur-sm bg-white/80 border border-gray-200/50 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to get started?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join our waitlist today and be the first to know when we
                  launch.
                </p>
                <Button
                  onClick={scrollToWaitlist}
                  size="lg"
                  className="rounded-full px-8 bg-gray-900 hover:bg-gray-800"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="backdrop-blur-sm bg-white/80 border-t border-gray-200/50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">DormShare</span>
              </div>
              <p className="text-sm text-gray-600">
                Connecting students with affordable housing solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-gray-900">Platform</h3>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-sm text-gray-600 hover:text-gray-900 text-left"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("for-universities")}
                  className="text-sm text-gray-600 hover:text-gray-900 text-left"
                >
                  For Universities / Hosts
                </button>
                <button
                  onClick={() => scrollToSection("for-students")}
                  className="text-sm text-gray-600 hover:text-gray-900 text-left"
                >
                  For Students
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-gray-900">Legal</h3>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Terms of Service
                </Link>
                <button
                  onClick={scrollToWaitlist}
                  className="text-sm text-gray-600 hover:text-gray-900 text-left"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-200/50 pt-6 md:flex-row">
            <p className="text-xs text-gray-500">
              © 2025 DormShare. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
