import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "./form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl md:text-2xl">Bangalore Service Center</span>
            </Link>
          </div>
          <Button asChild>
            <Link href="tel:080-62180344" className="gap-2">
              <PhoneCall className="h-4 w-4" />
              Call Now
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get in touch with our customer support team for assistance with your appliances.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <PhoneCall className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-500 dark:text-gray-400">Call us for immediate assistance</p>
                    <p className="font-medium mt-1">080-62180344</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400">Send us an email for general inquiries</p>
                    <p className="font-medium mt-1">support@bangloreservicecenter.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-500 dark:text-gray-400">Visit our main service center</p>
                    <p className="font-medium mt-1">No. 5, Bangalore Service Center, Jp Nagar 7th phase kanakpura main road
                    Bangalore - 560078</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Working Hours</h3>
                    <p className="text-gray-500 dark:text-gray-400">We're available at these times</p>
                    <div className="font-medium mt-1">
                      <p>Monday - Sunday: 9:00 AM - 8:00 PM</p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
              <ContactForm/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-6 md:py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> Bangalore Service Center is an independent third-party service center. We are not affiliated
              with or authorized by any TV manufacturer. All repairs and services will be chargeable, even if your
              product is still under the manufacturer's warranty.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Bangalore Service Center. All rights reserved.
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
                <Link href="tel:080-62180344" className="gap-2">
                  <PhoneCall className="h-4 w-4" />
                  080-62180344
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
