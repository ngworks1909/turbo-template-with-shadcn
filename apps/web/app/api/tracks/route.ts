import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const body = await req.json();
    const {id} = body;
    let success = true;
    try {
        const data = await prisma.option.findMany({
            where: {
                premiumId: id
            },
            orderBy: {
                id: 'asc'
            }
        });
        return NextResponse.json({success, data})
    } catch (error) {
        success = false;
        return NextResponse.json({success, error: 'Internal server error...'}, {status: 500})
    }
}