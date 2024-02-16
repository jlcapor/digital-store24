import NullData from '@/components/null-data';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import getCurrentUser from '@/lib/session';
import { cn } from '@/lib/utils';
import { Metadata } from 'next'
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
  
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Categorias",
  description: "Administrar categorias",
}

export default async function CategoriesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== 'ADMIN'){
    return <NullData title="¡Ups! Acceso denegado"/>
  }
  return (
    <Shell variant="sidebar">
      <PageHeader>
        <div className="flex space-x-4">
          <PageHeaderHeading size="sm" className="flex-1">
            Categorias
          </PageHeaderHeading>
          <Link
            aria-label="Create category"
            href="/dashboard/categories/add-category"
            className={cn(
              buttonVariants({
                size: "sm",
              })
            )}
          >
            Crear categoria
          </Link>
        </div>
        <PageHeaderDescription size="sm">
          Administrar las categorías
        </PageHeaderDescription>
      </PageHeader>
     
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
hhhhhhhhhhhhhh
      </section>
    </Shell>
  )
}


