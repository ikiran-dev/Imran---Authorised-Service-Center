'use client'

import { gtag_report_conversion } from "@/lib/gtag"
import Link from "next/link"


export default function TrackedLink({
  href,
  children,
  className = "",
  conversion = true,
}: {
  href: string
  children: React.ReactNode
  className?: string
  conversion?: boolean
}) {
  const handleClick = (e: React.MouseEvent) => {
    if (conversion) {
      e.preventDefault()
      gtag_report_conversion(href)
      window.location.href = href
    }
  }

  return (
    <Link href={href} onClick={conversion ? handleClick : undefined} className={className}>
      {children}
    </Link>
  )
}
