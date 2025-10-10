"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/popup"
import { PhoneCall, X, Clock, Home, Calculator } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type ServicePopupProps = {
  brand: string
}

export default function ServicePopup({ brand }: ServicePopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 7 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-end">
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Main Message */}
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-blue-600">Get Your Appliance Repaired in 2 Hours!</div>
            <p className="text-gray-600">Professional doorstep service with free estimate</p>
          </div>

          {/* Features */}
          <div className="grid gap-3">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">2-Hour Service</div>
                <div className="text-xs text-gray-600">Quick response time</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Home className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">Doorstep Service</div>
                <div className="text-xs text-gray-600">We come to you</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Calculator className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">Free Estimate</div>
                <div className="text-xs text-gray-600">No hidden charges</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-3">
            <Button asChild size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold">
               <Link href="tel:080-62180344" className="font-bold"> 
                  <Image width={25} height={25} src="/call.gif" alt="call"/>
                  CALL NOW
                </Link>
            </Button>

            <div className="text-center">
              <p className="text-xs text-gray-500">Available 24/7 • 6 Months Limited Warranty* • Expert technicians</p>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
            <p className="text-sm text-yellow-800">
              <strong>Limited Time:</strong> Book now and get 10% off on repair charges!*
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
