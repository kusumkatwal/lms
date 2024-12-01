import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface HeroBannerProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  imageSrc: string
}

export function HeroBanner({ title, subtitle, ctaText, ctaLink, imageSrc }: HeroBannerProps) {
  return (
    <div className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt="Hero background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl mb-6">{subtitle}</p>
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <a href='/register'>{ctaText}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

