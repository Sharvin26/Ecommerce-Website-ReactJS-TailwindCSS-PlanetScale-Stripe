export type TApiAllCategoriesResp = {
    categories: {
        id: string;
        name: string;
        products: {
            title: string;
            description: string;
            image: string;
            price: string;
        }[];
    }[];
};

export type TApiSingleCategoryWithProductResp = {
    category: {
        id: string;
        name: string;
        products: {
            id: string;
            title: string;
            description: string;
            image: string;
            price: string;
            quantity: number;
        }[];
        hasMore: boolean;
    };
};

export type TApiSingleProductResp = {
    product: {
        title: string;
        description: string;
        price: string;
        quantity: number;
        image: string;
    };
};

export type TApiErrorResp = {
    message: string;
};
