interface UpdateCategoryPageProps {
    params: {
        categoryId: string
    }
}

export default async function UpdateCategoryPage({
    params,
  }: UpdateCategoryPageProps) {
    const categoryId = Number(params.categoryId)
  }