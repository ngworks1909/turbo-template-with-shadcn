import { getServerSession } from "next-auth"
import {NEXT_AUTH_CONFIG} from '@repo/ui/auth'
import prisma from "@repo/db/client";

export const fetchOrders = async() => {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    const id = session.user.id;
    const orders = await prisma.order.findMany({
        where: {
            userId: id
        }
    });
    return orders;
}


