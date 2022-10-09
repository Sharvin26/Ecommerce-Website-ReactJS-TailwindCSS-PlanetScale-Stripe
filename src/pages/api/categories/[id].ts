import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../lib/prisma";
import {
    TApiErrorResp,
    TApiSingleCategoryWithProductResp
} from "../../../types";

const getSingleCategory = async (
    req: NextApiRequest,
    res: NextApiResponse<TApiSingleCategoryWithProductResp | TApiErrorResp>
) => {
    try {
        const id = req.query.id as string;
        const cursorId = req.query.cursorId;
        if (cursorId) {
            const categoriesData = await prisma.category.findUnique({
                where: {
                    id,
                },
                select: {
                    id: true,
                    name: true,
                    products: {
                        orderBy: {
                            createdAt: "desc",
                        },
                        take: 12,
                        skip: 1,
                        cursor: {
                            id: cursorId as string,
                        },
                        select: {
                            id: true,
                            title: true,
                            description: true,
                            image: true,
                            price: true,
                            quantity: true,
                        },
                    },
                },
            });

            if (!categoriesData) {
                return res.status(404).json({ message: `Category not found` });
            }

            let hasMore = true;
            if (categoriesData.products.length === 0) {
                hasMore = false;
            }

            return res
                .status(200)
                .json({ category: { ...categoriesData, hasMore } });
        }

        const categoriesData = await prisma.category.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                products: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 12,
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        image: true,
                        price: true,
                        quantity: true,
                    },
                },
            },
        });
        if (!categoriesData) {
            return res.status(404).json({ message: `Category not found` });
        }

        let hasMore = true;
        if (categoriesData.products.length === 0) {
            hasMore = false;
        }

        return res
            .status(200)
            .json({ category: { ...categoriesData, hasMore } });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong!! Please try again after sometime",
        });
    }
};

const handler = nc({ attachParams: true }).get(getSingleCategory);

export default handler;
