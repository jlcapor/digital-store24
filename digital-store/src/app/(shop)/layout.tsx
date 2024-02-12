import SiteHeader from "@/components/layouts/site-header";
import getCurrentUser from "@/lib/session";
export default async function MainLayout({ children }: React.PropsWithChildren ) {
    const currentUser = await getCurrentUser();
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <SiteHeader currentUser={currentUser}/>
            <main className="flex-1">{children}</main>
        </div>
    )
}