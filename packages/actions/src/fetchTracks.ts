import prisma from "@repo/db/client";

export const fetchTracks = async(id: string) => {
    const tracks = await prisma.option.findMany({
        where: {
            premiumId: id
        },
        orderBy: {
            id: 'asc'
        }
    });
    return tracks;
}