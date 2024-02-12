import { ModeToggle } from "@/components/layouts/mode-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import getCurrentUser from "@/lib/session"
import Link from "next/link";
import { notFound } from "next/navigation";
import { DashboardSidebarNav } from "../_components/dashboard-sidebar-nav";
import { dashboardConfig } from "@/config/dashboard";
import SiteHeader from "@/components/layouts/site-header";
import { DashboardMobileNav } from "../_components/dashboard-mobile-nav";

interface DashboardLayoutProps {
    children?: React.ReactNode
}
export default async function DashboardLayout({children}: DashboardLayoutProps) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return notFound()
    }

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader currentUser={currentUser} />
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
                    <ScrollArea className="py-4 pr-6 lg:py-8">
                        <DashboardSidebarNav items={dashboardConfig.sidebarNav} className="p-1" />
                    </ScrollArea>
                </aside>
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    <div className="mx-auto flex justify-end md:flex-row w-full">
                        <DashboardMobileNav items={dashboardConfig.sidebarNav}/>
                    </div>
                    {children}
                </main>
            </div>
            {/* footer */}
        </div>
    )
}