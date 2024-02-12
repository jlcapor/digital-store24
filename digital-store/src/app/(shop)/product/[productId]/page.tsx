
interface ProductPageProps {
    params: {
      productId: string
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    return (
        <div className="container">
            <h1>Product Page</h1>
        </div>
    )
}