import prisma from "@repo/db/client";
import { NEXT_AUTH_CONFIG } from "@repo/ui/auth";
import { updateUser } from "@repo/zod/updateUser";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    const id = session.user.id;

    const body = await req.json();
    let success = false;
    const updateStatus = updateUser.safeParse(body);
    if(!updateStatus) {
        return NextResponse.json({success, error: "Invalid inputs..."})
    }
    const {username, mobile, image} = body;
    try {
        await prisma.user.update({
            where: {
                userId: id
            },
            data: {
                username, mobile, image
            }
        })
        success = true;
        return NextResponse.json({success, message: "User update successful..."})
    } catch (error) {
        success = false;
        return NextResponse.json({success, error: 'Internal server error...'}, {status: 500});
    }
}