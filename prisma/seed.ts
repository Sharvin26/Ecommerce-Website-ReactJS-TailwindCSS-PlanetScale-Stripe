import {
    randBetweenDate,
    randNumber,
    randProduct,
    randProductAdjective,
} from "@ngneat/falso";
import { PrismaClient } from "@prisma/client";

const primsa = new PrismaClient();

const main = async () => {
    try {
        await primsa.category.deleteMany();
        await primsa.product.deleteMany();
        const fakeProducts = randProduct({
            length: 1000,
        });
        for (let index = 0; index < fakeProducts.length; index++) {
            const product = fakeProducts[index];
            const productAdjective = randProductAdjective();
            await primsa.product.upsert({
                where: {
                    title: `${productAdjective} ${product.title}`,
                },
                create: {
                    title: `${productAdjective} ${product.title}`,
                    description: product.description,
                    price: product.price,
                    image: `${product.image}/tech`,
                    quantity: randNumber({ min: 10, max: 100 }),
                    category: {
                        connectOrCreate: {
                            where: {
                                name: product.category,
                            },
                            create: {
                                name: product.category,
                                createdAt: randBetweenDate({
                                    from: new Date("10/06/2020"),
                                    to: new Date(),
                                }),
                            },
                        },
                    },
                    createdAt: randBetweenDate({
                        from: new Date("10/07/2020"),
                        to: new Date(),
                    }),
                },
                update: {},
            });
        }
    } catch (error) {
        throw error;
    }
};

main().catch((err) => {
    console.warn("Error While generating Seed: \n", err);
});
