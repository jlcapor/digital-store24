import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/lib/session";

export async function POST(req: Request){
    const currentUser = await getCurrentUser();
}