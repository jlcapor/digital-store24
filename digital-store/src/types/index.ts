import { type Icons } from "@/components/icons"
import { type FileWithPath } from "react-dropzone"
import { User } from "@prisma/client"

export interface NavItem {
  title: string
  href: string
  onClick?: () => void
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}


export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export type MainNavItem = NavItemWithOptionalChildren

export type SidebarNavItem = NavItemWithChildren



export interface Category {
  title: string
  image: string
  icon: React.ComponentType<{ className?: string }>
  subcategories: Subcategory[]
}

export interface Subcategory {
  title: string
  description?: string
  image?: string
  slug: string
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};


export type FileWithPreview = FileWithPath & {
  preview: string
}









