import { NEXT_AUTH_CONFIG } from "@repo/ui/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    const id = session.user.id;
    return NextResponse.json({id});
}