export declare const retrieveList: ({ limit, offset }: {
    limit?: number | undefined;
    offset?: number | undefined;
}) => Promise<{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}[]>;
export declare const retrieveById: (id: number) => Promise<{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}>;
