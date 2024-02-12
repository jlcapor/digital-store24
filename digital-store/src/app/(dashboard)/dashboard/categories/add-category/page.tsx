import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateCategoryForm } from "@/components/forms/category-form/add-category-form";

export default async function NewCategoryPage() {
    return (
      <div className="grid gap-8 py-10 md:py-8 mt-8">
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