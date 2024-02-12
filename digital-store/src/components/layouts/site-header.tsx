import React from 'react'
import { ModeToggle } from './mode-toggle'
import { SafeUser } from '@/types';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button, buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { DashboardIcon, ExitIcon, GearIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';
import MainNav from './main-nav';
import { ProductSearch } from '../product-search';
import MobileNavMenu from './mobile-nav-menu';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { AlignRight } from 'lucide-react';


interface SiteHeaderProps {
  currentUser?:SafeUser | null;
}
const SiteHeader = ({ currentUser }: SiteHeaderProps) => {
  const initials = `${currentUser?.name?.charAt(0) ?? ""} ${
    currentUser?.name?.charAt(0) ?? ""
  }`
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
          <MainNav items={siteConfig.mainNav} />
          <MobileNavMenu items={siteConfig.mainNav} />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-auto md:w-auto md:flex-none">
             <ProductSearch/>
            </div>
            <nav className="flex items-center space-x-2">
              <ModeToggle/>
                {currentUser ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        className="relative h-9 w-9 rounded-full"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={currentUser.image ?? ""}
                            alt={currentUser.name ?? ""}
                          />
                          <AvatarFallback>{initials}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {currentUser?.name}
                          </p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {currentUser?.email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator/>
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard">
                            <DashboardIcon
                              className="mr-2 h-4 w-4"
                              aria-hidden="true"
                            />
                              Dashboard
                              <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard/account">
                            <GearIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/signout">
                          <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                          Log out
                          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) :(
                <Link
                    href="/login"
                    className={buttonVariants({
                      size: "sm",
                    })}
                  >
                    Iniciar sesión
                    <span className="sr-only">Iniciar sesión</span>
                  </Link>
                )}
            </nav>
          </div>
        </div>
        <Separator/>
        <div className="w-full">
          <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-4 overflow-x-auto whitespace-nowrap px-3 py-2 sm:w-[95vw] md:justify-start">
            <Sheet>
              <SheetTrigger asChild>
                <Button aria-label="Filter products" variant="ghost" size="sm">
                <AlignRight className='mr-2' />
                  Categorias
                </Button>
              </SheetTrigger>
            </Sheet>
          </div>
        </div>
    </header>
  )
}

export default SiteHeader
