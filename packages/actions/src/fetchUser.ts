import { getServerSession } from "next-auth";
import {NEXT_AUTH_CONFIG} from '@repo/ui/auth'
import prisma from "@repo/db/client";


export const fetchUser = async() => {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    const id = session.user.id;
    if(id){
        const user = await prisma.user.findUnique({
            where: {
                userId: id
            },
            select: {
                username: true,
                image: true
            }
        })
        return user;
    }
    return null;
}