import Link from "next/link"
import { notFound } from "next/navigation"
import { brands } from "@/lib/brands"
import { Button } from "@/components/ui/button"
import { PhoneCall, Star, Shield, Clock, Users, Phone } from "lucide-react"
import ServiceForm from "@/components/service-form"
import clsx from "clsx"
import Image from "next/image"
import ServicePopup from "@/components/service-popup"

interface BrandPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }))
}

export const dynamicParams = false


export default function BrandPage({ params }: BrandPageProps) {
  const {slug} =  params
  const brand = brands.find((brand) => brand.slug === slug)

  if (!brand) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className={clsx(
    "sticky top-0 z-50 w-full backdrop-blur",
    slug === "sony-service-center"
      ? "bg-black border-none"
      : "border-b bg-background/95 supports-[backdrop-filter]:bg-background/60"
  )}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 flex items-center justify-center">
                {/* <img
                  src={brand.logoUrl || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                /> */}
              </div>
            <span className="font-bold text-xl md:text-2xl">Premium Service</span>
              {/* <span className="font-bold text-xl">{brand.name}</span> */}
            </Link>
          </div>
          <Button asChild className={clsx(slug === "sony-service-center" &&'bg-white text-black')}>
            <Link href="tel:080-62180344" className={clsx("gap2",slug === "sony-service-center" &&"text-black")}>
            {slug === 'sony-service-center' && <Phone fill="black"/>}
             {slug !== 'sony-service-center' && <Image width={25} height={25} src="/call.gif" alt="call"/>}
              
              Call Now
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <Image
              src={brand.heroImage || "/placeholder.svg?height=500&width=1200"}
              alt={`${brand.name} appliances`}
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{brand.name} Service Center</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                  {brand.tagline ?? `Fast and professional repair services for all ${brand.name} appliances.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 text-center">
            <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl leading-relaxed mb-8">
              {brand.name} Service Center offers 24/7 support for all your appliance needs. Simply log in, fill out your
              details, and submit the form — or press the 'Call Now' button for instant assistance.
            </p>
            <div className="flex flex-col items-center justify-center">
              <Button asChild size="lg" className="gap-2 text-lg">
                <Link href="tel:080-62180344">
                  <Image width={25} height={25} src="/call.gif" alt="call"/>
                  CALL NOW
                </Link>
              </Button>
            </div>
          </div>
        </section>


                <section className="py-12">
  <div className="container px-4 md:px-6">
    <div className="grid gap-8 lg:grid-cols-2 items-start">
      {/* Left: Service Form */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Request {brand.name} Service</h2>
        <ServiceForm brand={brand.name} />
      </div>

      {/* Right: Services */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Our Services for {brand.name} Products</h2>
        <div className="grid gap-4">
          {brand.services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  {/* Your custom SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-6 h-6"
                  >
                    <g
                      fill="#228be6"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M19.58789,3.00977c-2.07244,-0.08194 -4.17141,0.6675 -5.75391,2.25c-1.97494,1.97494 -2.2324,4.33856 -1.33203,6.58203l-8.33008,8.33008c-1.562,1.562 -1.562,4.09425 0,5.65625c1.562,1.562 4.09425,1.562 5.65625,0l8.33008,-8.33008c2.24347,0.90037 4.60709,0.64291 6.58203,-1.33203c2.11,-2.11 2.73663,-5.13687 1.89063,-7.79688l-4.63086,4.63086l-4,-1l-1,-4l4.63086,-4.63086c-0.665,-0.2115 -1.35216,-0.33206 -2.04297,-0.35937zM7,21c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Product Gallery */}
        <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
      {brand.name} Products We Service
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {brand.productImages.map((product, index) => (
        <div
          key={index}
          className="bg-white text-center rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
          <p className="text-base font-medium text-gray-700">{product.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>



        {/* Why Choose Us */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our {brand.name} Service?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Authorized Service</h3>
                <p className="text-gray-600 text-sm">
                  Official {brand.name} authorized service center with genuine parts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600 text-sm">Factory-trained professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Quick Service</h3>
                <p className="text-gray-600 text-sm">Same-day service available for most repairs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Service Warranty</h3>
                <p className="text-gray-600 text-sm">90-day warranty on all repairs and parts</p>
              </div>
            </div>
          </div>
        </section>






        {/* Common Issues */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Common {brand.name} Issues We Fix</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {brand.commonIssues.map((issue, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">{issue.title}</h3>
                      <p className="text-sm text-gray-600">{issue.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      

        {/* Final CTA */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Need {brand.name} Service Right Now?</h2>
            <p className="text-xl mb-8 opacity-90">Our expert technicians are ready to help you</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary" className="gap-2 text-lg">
                <Link href="tel:080-62180344">
                  <PhoneCall className="h-5 w-5" />
                  Call: 080-62180344
                </Link>
              </Button>
              <span className="text-sm opacity-75">Available 24/7 for emergency repairs</span>
            </div>
          </div>
        </section>
      </main>
      
     <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-6 md:py-8 pb-28">
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
            <div className="hidden md:flex items-center gap-4">
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
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
  <div className="relative md:hidden">
    <div className="absolute inset-0 sparkle-border rounded-t-lg"></div>
    <a href="tel:080-62180344" 
       className="w-full bg-black text-white py-4 flex flex-col items-center justify-center text-[20px] font-bold shadow-lg relative z-10 call-button transition-all duration-300">
      <div className="flex items-center space-x-1 pb-1">
        <Image width={30} height={30} src="/call.gif" alt="call"/>
        <span >Call Now: 080-62180344</span>
      </div>
       <span className="text-[14px]">Doorstep Service With Free Estimate</span>
    </a>
  </div>
</div>
<ServicePopup brand={brand.name} />
    </div>
    
  )
}
