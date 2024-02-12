import { type SidebarNavItem } from "@/types";


export interface DashboardConfig {
    sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
    sidebarNav: [
        {
          title: "Categorias",
          href: "/dashboard/categories",
          icon: 'category',
          items: [],
        },
        {
          title: "Subcategorias",
          href: "/dashboard/subcategorias",
          icon: 'subacategory',
          items: [],
        },
        {
          title: "Productos",
          href: "/dashboard/products",
          icon: 'product',
          items: [],
        },
       
      ],
}