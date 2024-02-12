import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Products } from "@/components/product/products";
import { Shell } from "@/components/shell";

export default async function ProductsPage(){
    return (
      <Shell>
        <PageHeader>
          <PageHeaderHeading size="sm">Productos</PageHeaderHeading>
        </PageHeader>
        <Products/>
      </Shell>
  )
}