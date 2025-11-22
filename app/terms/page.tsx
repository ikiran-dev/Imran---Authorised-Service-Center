import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import ServicePopup from "@/components/service-popup"
import TrackedLink from "@/components/track"

export default function TermsPage() {
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
            <div className="mx-auto max-w-4xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Terms and Conditions</h1>

              <div className="space-y-8 text-gray-600">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                  <p>
                    By accessing and using our services, you accept and agree to be bound by the terms and provision of
                    this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Service Description</h2>
                  <p>
                    We provide repair and maintenance services for various home appliances. Our services include but are
                    not limited to:
                  </p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Appliance diagnosis and repair</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Maintenance and servicing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Parts replacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Installation services</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Pricing and Payment</h2>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>All services are chargeable, including diagnosis fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Prices may vary based on appliance type, model, and complexity of repair</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Payment is due upon completion of service unless otherwise agreed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>We accept cash, card, and digital payment methods</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Service Warranty</h2>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>We provide a 90-day service warranty on repairs and replaced parts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Warranty covers the specific repair performed, not the entire appliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Warranty is void if the appliance is tampered with by unauthorized personnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Warranty does not cover damage due to misuse, accidents, or natural disasters</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Customer Responsibilities</h2>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Provide accurate information about the appliance and the problem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Ensure safe access to the appliance for our technicians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Be present or designate an authorized representative during service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Remove or secure valuable items near the appliance</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Our liability is limited to the cost of the service provided</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>We are not liable for consequential, indirect, or punitive damages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>We are not responsible for data loss from electronic appliances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Customer assumes risk for appliances deemed beyond economical repair</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Cancellation Policy</h2>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Service appointments can be cancelled up to 2 hours before scheduled time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Late cancellations may incur a service charge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>No-show appointments will be charged a visit fee</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Parts and Components</h2>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>We use genuine or compatible parts based on availability and customer preference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Replaced parts become property of the service center unless requested by customer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Parts prices are subject to market rates and availability</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Privacy and Data Protection</h2>
                  <p>
                    Your privacy is important to us. Please refer to our Privacy Policy for information about how we
                    collect, use, and protect your personal information.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Dispute Resolution</h2>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Any disputes will be resolved through negotiation and mediation first</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Legal disputes are subject to the jurisdiction of local courts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Customer complaints should be directed to our customer service team</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Modifications to Terms</h2>
                  <p>
                    We reserve the right to modify these terms and conditions at any time. Updated terms will be posted
                    on our website and take effect immediately upon posting.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                  <p>For questions about these terms and conditions, please contact us:</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>Phone:</strong> 080-62180344
                    </p>
                    <p>
                      <strong>Address:</strong> No. 5, Premium Service Center, Jp Nagar 7th phase kanakpura main road Bangalore - 560078
                    </p>
                  </div>
                </div>

                <div className="text-sm text-gray-500 pt-8 border-t">
                  <p>
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-6 md:py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> Premium Service Center is an independent third-party service center. We are not affiliated
              with or authorized by any manufacturer. All repairs and services will be chargeable, even if your
              product is still under the manufacturer's warranty.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
        </div>
      </footer>
       <ServicePopup brand={""} />
    </div>
  )
}
