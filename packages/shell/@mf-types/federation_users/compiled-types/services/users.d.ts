export declare const login: (username: string, password: string) => Promise<{
    id: number;
    email: string;
    username: string;
    name: {
        firstname: string;
        lastname: string;
    };
}>;
export declare const retrieveById: (id: number) => Promise<{
    id: number;
    email: string;
    username: string;
    name: {
        firstname: string;
        lastname: string;
    };
}>;
