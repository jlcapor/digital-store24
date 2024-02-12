"use client"
import Link from 'next/link'
import React from 'react'
import { Icons } from '../icons'
import { NavItem } from '@/types'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
interface MainNavProps {
  items?: NavItem[]
}
const MainNav = ({ items }: MainNavProps) => {
  const pathname  = usePathname();
  
  return (
    <div className="mr-4 hidden md:flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" aria-hidden="true" />
            <span className="hidden font-bold sm:inline-block">
                {siteConfig.name}
            </span>
            <span className="sr-only">Home</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Inicio
          </Link>

          <Link
            href="/products"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/products")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Productos
          </Link>
          <Link
            href="/contact"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/contact")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Contacto
          </Link>
          <Link
            href="/blog"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/blog")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Blog
          </Link>
        </nav>
    </div>
  )
}

export default MainNav
