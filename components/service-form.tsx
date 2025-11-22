'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'

interface ServiceFormProps {
  brand: string
}

export default function ServiceForm({ brand }: ServiceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [productType, setProductType] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement

    const name = (form.querySelector('#name') as HTMLInputElement)?.value
    const phone = (form.querySelector('#phone') as HTMLInputElement)?.value
    const email = (form.querySelector('#email') as HTMLInputElement)?.value
    const address = (form.querySelector('#address') as HTMLTextAreaElement)?.value
    const model = (form.querySelector('#model') as HTMLInputElement)?.value
    const issue = (form.querySelector('#issue') as HTMLTextAreaElement)?.value

    const text = `
Brand: ${brand}
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}
Product Type: ${productType || 'Not specified'}
Model Number: ${model}
Issue: ${issue}
    `.trim()

    const whatsappUrl = `https://wa.me/919845188786?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')

    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'WhatsApp Message Prepared',
        description: "We've opened WhatsApp with your service request.",
      })
      form.reset()
      setProductType('')
    }, 500)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-background p-6 rounded-lg border"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Enter your full name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="Enter your phone number" required type="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="Enter your email address" required type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea id="address" placeholder="Enter your full address" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="product">Product Type</Label>
        <Select value={productType} onValueChange={setProductType} required>
          <SelectTrigger id="product">
            <SelectValue placeholder="Select product type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Refrigerator">Refrigerator</SelectItem>
            <SelectItem value="Washing Machine">Washing Machine</SelectItem>
            <SelectItem value="Air Conditioner">Air Conditioner</SelectItem>
            <SelectItem value="Microwave Oven">Microwave Oven</SelectItem>
            <SelectItem value="Geyser">Geyser</SelectItem>
            <SelectItem value="Television">Television</SelectItem>
            <SelectItem value="Dishwasher">Dishwasher</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="model">Model Number (if known)</Label>
        <Input id="model" placeholder="Enter model number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="issue">Describe the Issue</Label>
        <Textarea
          id="issue"
          placeholder="Please describe the problem you're experiencing"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          `Request ${brand} Service`
        )}
      </Button>
    </form>
  )
}
