import prisma from "@repo/db/client"

export const fetchDetails = async(orderId : number) => {
    const details = await prisma.order.findUnique({
        where: {
            orderId
        }
    })

    return details;

}