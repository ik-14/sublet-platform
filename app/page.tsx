import Link from "next/link"
import Image from "next/image"
import { Building, GraduationCap, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { WaitlistForm } from "@/components/waitlist-form"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">DormShare</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-sm font-medium">
              How It Works
            </Link>
            <Link href="#for-universities" className="text-sm font-medium">
              For Universities
            </Link>
            <Link href="#for-students" className="text-sm font-medium">
              For Students
            </Link>
            <Link href="#about" className="text-sm font-medium">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#login" className="text-sm font-medium">
              Log in
            </Link>
            <Button size="sm" className="rounded-full">
              Sign up
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Student Dorm Subletting, <span className="text-primary">Simplified</span>
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Your new favorite platform for affordable student housing during internships and short stays.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="rounded-full px-8">
                  For Hosts
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  For Subletters
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join our waitlist</h2>
                <p className="text-muted-foreground">
                  Be the first to know when we launch. Get early access and exclusive offers.
                </p>
                <WaitlistForm />
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Student dorm room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our platform connects students and universities with those looking for affordable short-term housing.
              </p>
            </div>
            <HowItWorks />
          </div>
        </section>

        <section id="for-universities" className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  For Universities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Maximize your dormitory resources</h2>
                <p className="text-muted-foreground md:text-lg">
                  Turn vacant dorm rooms during breaks into revenue opportunities. Help students find affordable housing
                  while generating additional income for your institution.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">Utilize empty dorms during breaks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">Support student internship opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">Create additional revenue streams</span>
                  </div>
                </div>
                <Button className="rounded-full">Learn More</Button>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="University dormitory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="for-students" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-lg order-last lg:order-first">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Student in dorm room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  For Students
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Affordable housing for your internship or short stay
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Find budget-friendly accommodation in university dorms when you need it most. Perfect for summer
                  internships, short courses, or temporary stays.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">Save money on housing costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">Stay in convenient campus locations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">Connect with other students and interns</span>
                  </div>
                </div>
                <Button className="rounded-full">Find Housing</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Students Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Hear from students who have used our platform to find affordable housing.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Find answers to common questions about our platform.
              </p>
            </div>
            <FAQ />
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to get started?</h2>
              <p className="max-w-[700px] md:text-lg">
                Join our waitlist today and be the first to know when we launch.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full px-8 mt-4">
                Join Waitlist
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">DormShare</span>
              </div>
              <p className="text-sm text-muted-foreground">Connecting students with affordable housing solutions.</p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Platform</h3>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  How It Works
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  For Universities
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  For Students
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Company</h3>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Legal</h3>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
            <p className="text-xs text-muted-foreground">© 2025 DormShare. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
