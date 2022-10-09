import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../lib/prisma";
import { TApiErrorResp, TApiSingleProductResp } from "../../../types";

const getSingleProduct = async (
    req: NextApiRequest,
    res: NextApiResponse<TApiSingleProductResp | TApiErrorResp>
) => {
    try {
        const title = req.query.title as string;
        const product = await prisma.product.findUnique({
            where: {
                title,
            },
            select: {
                title: true,
                description: true,
                price: true,
                quantity: true,
                image: true,
            },
        });
        if (!product) {
            return res.status(404).json({ message: `Product not found` });
        }
        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong!! Please try again after sometime",
        });
    }
};

const handler = nc({ attachParams: true }).get(getSingleProduct);

export default handler;
