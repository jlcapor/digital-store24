import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateCategoryForm } from "@/components/forms/category-form/add-category-form";
import getCurrentUser from "@/lib/session";
import NullData from "@/components/null-data";

export default async function NewCategoryPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== 'ADMIN'){
    return <NullData title="¡Ups! Acceso denegado"/>
  }
  return (
    // <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
    <div className="grid gap-8 py-10 md:py-8">
      <Card>
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Crear categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateCategoryForm/>
        </CardContent>
      </Card>
      </div>
    )
}