import Link from "next/link"
import { brands } from "@/lib/brands"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

export default function Home() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Premium Service Centers for Top Brands
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get professional repair and maintenance services for all your appliances from Bangalore service
                  centers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/${brand.slug}`}
                  className="flex flex-col items-center justify-center p-4 border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-2">
                    <img
                      src={brand.logoUrl || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="font-medium text-center">{brand.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-muted py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Our Service Centers?</h2>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>Genuine spare parts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>Trained technicians</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>90-day service warranty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>Doorstep service available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services</h2>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>Installation & Setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>Repairs & Maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>Warranty Services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>Annual Maintenance Contracts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <span>Spare Parts Replacement</span>
                  </li>
                </ul>
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
              {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Authorised Service Center. All rights reserved.
              </p> */}
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
