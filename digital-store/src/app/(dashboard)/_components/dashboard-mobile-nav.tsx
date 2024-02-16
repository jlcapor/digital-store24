"use client"
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { SidebarNavItem } from "@/types";
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlignJustify, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface DashboardMobileNavProps {
    items: SidebarNavItem[]
}
export function DashboardMobileNav({ items }: DashboardMobileNavProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <Button
       variant="ghost"
       onClick={openMobileMenu}
       aria-label="Open mobile menu"
       className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden mt-4"
     >
        <AlignJustify  className="h-6 w-6"/>
      </Button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
            <Transition.Child
                as={Fragment}
                enter="transition-all ease-in-out duration-300"
                enterFrom="opacity-0 backdrop-blur-none"
                enterTo="opacity-100 backdrop-blur-[.5px]"
                leave="transition-all ease-in-out duration-200"
                leaveFrom="opacity-100 backdrop-blur-[.5px]"
                leaveTo="opacity-0 backdrop-blur-none"
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            </Transition.Child>
            <Transition.Child
             as={Fragment}
             enter="transition-all ease-in-out duration-300"
             enterFrom="translate-x-[-100%]"
             enterTo="translate-x-0"
             leave="transition-all ease-in-out duration-200"
             leaveFrom="translate-x-0"
             leaveTo="translate-x-[-100%]"
            >
              <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{siteConfig.name}</span>
                      <button
                        className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
                          onClick={closeMobileMenu}
                          aria-label="Close mobile menu"
                        >
                          <X className="h-6" />
                          </button>
                        </div>
                        {items.length ? (
                            <ul className="flex w-full flex-col px-4">
                              {items.map((item) => (
                                <li
                                  className="py-2 px-3 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                                  key={item.title}
                                >
                                  <Link href={item.href} onClick={closeMobileMenu}>
                                    {item.title}
                                      </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
              </Dialog.Panel>
            </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}