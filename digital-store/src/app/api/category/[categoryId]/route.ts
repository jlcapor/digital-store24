import getCurrentUser from "@/lib/session";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { slugify } from "@/lib/utils";
export async function PATCH(req: Request, {params}:{params : {categoryId: string}}) {
   try {
    const body = await  req.json();
    const { name, description } = body;
    const slug = slugify(name);
    const user = await getCurrentUser();
    if(!params.categoryId){
        return new NextResponse('Category ID is required');
    }

    if (!user) return new Response("Not authenticated", { status: 401});

    const category = await prisma.category.update({
        where:{id: params.categoryId},
        data:{
            name: name.toLowerCase(),
            description,
            slug,
        }
    })
    return NextResponse.json(category);
   } catch (error) {
    console.log(error);
    return new Response('Internal Server Error', {status:500})
   }
}