"use client"
import * as React from "react";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
export function ProductSearch(){
    const [open, setOpen] = React.useState(false)
    return (
        <> 
          <Button
            variant="outline"
            className={cn(
                "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
              )}
              onClick={() => setOpen(true)}
          >
            <MagnifyingGlassIcon className="h-4 w-4 xl:mr-2" aria-hidden="true" />
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </>
    )
}