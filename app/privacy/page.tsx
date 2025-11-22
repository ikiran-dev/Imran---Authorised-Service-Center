import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import ServicePopup from "@/components/service-popup"
import TrackedLink from "@/components/track"

export default function PrivacyPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Privacy Policy</h1>

              <div className="space-y-8 text-gray-600">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, make a
                    service request, contact us for support, or otherwise communicate with us. This may include:
                  </p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Personal information such as name, email address, phone number, and address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Service request details including appliance information and problem descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Communication preferences and customer service interactions</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Provide, maintain, and improve our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Process and complete service requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Send you technical notices, updates, security alerts, and support messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Respond to your comments, questions, and customer service requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Communicate with you about products, services, and events</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except in the following circumstances:
                  </p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>With service providers who assist us in operating our business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>When required by law or to protect our rights and safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>In connection with a merger, acquisition, or sale of assets</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method
                    of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in
                    this privacy policy, unless a longer retention period is required or permitted by law.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Access and update your personal information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Request deletion of your personal information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>Opt out of marketing communications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex h-2 w-2 translate-y-2 rounded-full bg-primary" />
                      <span>File a complaint with relevant data protection authorities</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
                  <p>
                    We use cookies and similar tracking technologies to collect information about your browsing
                    activities and to personalize your experience on our website. You can manage your cookie preferences
                    through your browser settings.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any material changes by
                    posting the new privacy policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                  <p>
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  </p>
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
