import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import ServicePopup from "@/components/service-popup"
import TrackedLink from "@/components/track"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl md:text-2xl">Premium Service Center</span>
            </Link>
          </div>
          <Button asChild>
            <TrackedLink href="tel:080-62180344" className="gap-2">
              <PhoneCall className="h-4 w-4" />
              Call Now
            </TrackedLink>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your trusted partner for all appliance repair and maintenance needs.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  At Premium Service Center, our mission is to provide reliable, professional, and timely repair
                  services for all major appliance brands. We understand the inconvenience caused by malfunctioning
                  appliances and strive to restore them to optimal working condition as quickly as possible.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Choose Us</h2>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
                    <span>
                      <strong>Authorized Service:</strong> We are third party service center, not authorized by major brands to provide
                      repair and maintenance services.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
                    <span>
                      <strong>Trained Technicians:</strong> Our technicians are factory-trained and certified to work on
                      specific brands and models.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
                    <span>
                      <strong>Genuine Parts:</strong> We use only genuine manufacturer-approved parts for all repairs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
                    <span>
                      <strong>Warranty:</strong> All our repairs come with a service warranty for your peace of mind.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
                    <span>
                      <strong>24/7 Support:</strong> Our customer service team is available round the clock to assist
                      you.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Process</h2>
                <ol className="space-y-4 text-gray-500 dark:text-gray-400">
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        1
                      </div>
                      <span className="font-medium">Contact Us</span>
                    </div>
                    <p className="pl-8">
                      Call our service center or fill out the online form with details about your appliance and the
                      issue you're experiencing.
                    </p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        2
                      </div>
                      <span className="font-medium">Diagnosis</span>
                    </div>
                    <p className="pl-8">
                      Our technician will visit your location to diagnose the problem and provide a detailed assessment.
                    </p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        3
                      </div>
                      <span className="font-medium">Repair</span>
                    </div>
                    <p className="pl-8">
                      Once approved, our technician will perform the necessary repairs using genuine parts.
                    </p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        4
                      </div>
                      <span className="font-medium">Testing</span>
                    </div>
                    <p className="pl-8">
                      After repair, we thoroughly test the appliance to ensure it's working properly.
                    </p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        5
                      </div>
                      <span className="font-medium">Follow-up</span>
                    </div>
                    <p className="pl-8">We follow up after service to ensure your continued satisfaction.</p>
                  </li>
                </ol>
              </div>
              <div className="pt-4 text-center">
                <Button asChild size="lg">
                  <TrackedLink href="tel:080-62180344" className="gap-2">
                    <PhoneCall className="h-5 w-5" />
                    Contact Us Today
                  </TrackedLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-6 md:py-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Premium Service Center. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/about">About Us</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/contact">Contact</Link>
            </Button>
             <Button asChild variant="outline" size="sm">
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/terms">Terms</Link>
              </Button>
            <Button asChild size="sm">
              <TrackedLink href="tel:080-62180344" className="gap-2">
                <PhoneCall className="h-4 w-4" />
                080-62180344
              </TrackedLink>
            </Button>
          </div>
        </div>
      </footer>
      <ServicePopup brand={""} />
    </div>
  )
}
