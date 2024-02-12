import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Icons } from '../icons'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { NavItem } from '@/types'
import { ChevronLeftIcon } from 'lucide-react'

interface MainNavProps {
    items?: NavItem[]
}
const MobileNavMenu = ({ items }: MainNavProps) => {
  return (
    <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Icons.logo className="mr-2 h-4 w-4 " />
              <span className="font-bold">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={20}
            className="w-52 overflow-y-auto overflow-x-hidden rounded-sm"
          >
            <DropdownMenuLabel>
              <Link
                href="/"
                className="flex items-center"
              >
                <Icons.logo
                  className="mr-2 h-4 w-4"
                  aria-hidden="true"
                />
                <span className="font-semibold">{siteConfig.name}</span>
              </Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {items?.map((item, index) => {
               const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon
              return item.href ? (
                <DropdownMenuItem
                  key={index}
                  asChild
                >
                  <Link href={item.href}>
                    {item.icon && (
                      <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="line-clamp-1">{item.title}</span>
                  </Link>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  key={index}
                  asChild
                >
                  <div onClick={item.onClick}>
                    {item.icon && (
                      <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="line-clamp-1">{item.title}</span>
                  </div>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNavMenu
