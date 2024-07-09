import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

type Params = {
    orderId: number
}

export async function GET(req: NextRequest, {params}: {params: Params}){
    const id = Number(params.orderId);
    let success = true;
    try {
        const details = await prisma.order.findUnique({
            where:{
                orderId: id
            }
        });
        return NextResponse.json({success, details})
    } catch (error) {
        success = false;
        return NextResponse.json({success, error: "Internal server error..."})
    }
}