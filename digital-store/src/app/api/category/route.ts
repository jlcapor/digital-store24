import getCurrentUser from "@/lib/session";
import { slugify } from "@/lib/utils";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "ADMIN") {
      return  new NextResponse('Unauthorized', {status: 401})
    }

    const body = await request.json();
    const { name, description } = body;
    const slug = slugify(name);
    const category = await prisma.category.create({
      data: {
        name: name.toLowerCase(),
        description,
        slug,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log('Error at /api/category POST', error);
    return new Response("Internal Error", { status: 500 })
  }
}
