"use client"

import { useState } from "react"
import Banner from "@/components/Banner"
import BannerControls from "@/components/Banner-Control"

export default function Home() {
  const [bannerProps, setBannerProps] = useState({
    title: "Photography Adventures",
    description:
      "Exploring the world through my lens, one click at a time. Join me on my journey to capture the beauty of nature, urban landscapes, and everything in between.",
    backgroundColor: "#1e3a8a",
    textColor: "#ffffff",
    imageUrl: "/placeholder.svg?height=400&width=600",
    padding: "py-12",
    alignment: "text-center",
    buttonText: "View Gallery",
    buttonUrl: "#",
    borderRadius: "rounded-lg",
    backgroundPattern: "none",
    boxShadow: "shadow-none",
    borderWidth: "border-0",
    borderColor: "#000000",
    overlayOpacity: "0",
    overlayColor: "#000000",
  })

  const handleBannerChange = (newProps) => {
    setBannerProps((prevProps) => ({
      ...prevProps,
      ...newProps,
    }))
  }

  return (
    <main className="min-h-screen">
      <Banner {...bannerProps} />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Edit Banner</h2>
        <BannerControls bannerProps={bannerProps} onBannerChange={handleBannerChange} />
      </div>
    </main>
  )
}

