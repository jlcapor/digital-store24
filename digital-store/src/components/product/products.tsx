'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {  ArrowDownNarrowWide, Filter } from "lucide-react";
import { sortOptions } from "@/config/products";
import { Product } from "@prisma/client";

interface ProductsProps {
    products: Product;
}
export function Products(){
    return (
        <section className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button aria-label="Filter products" variant="outline" size="sm">
                            <Filter className="mr-2 h-4 w-4"/>
                            Filtrar
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col">
                        <SheetHeader className="px-1">
                            <SheetTitle>Filters</SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-label="Sort products" variant="outline" size="sm" >
                            Sort
                            <ArrowDownNarrowWide className="ml-2 h-5 w-5" aria-hidden="true"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        {sortOptions.map((option) => (
                            <DropdownMenuItem
                                key={option.label}
                            >
                                {option.label}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </section>
      )
    }
    