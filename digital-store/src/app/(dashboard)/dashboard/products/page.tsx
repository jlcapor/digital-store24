import { Metadata } from "next";


const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
: 'http://localhost:3000';
  
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Productos",
  description: "Administrar Productos",
}

export default async function ProductsPage(){
    return(
        <></>
    )
}