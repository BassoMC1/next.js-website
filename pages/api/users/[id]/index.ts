import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const { id } = req.query;

    const pardedID = parseInt(id.toString())
    if (isNaN(pardedID)) return res.status(400).end();
    const user = await prisma.user.findUnique({ where: { id: pardedID } });
    return user ? res.send(user) : res.status(400).end();
}