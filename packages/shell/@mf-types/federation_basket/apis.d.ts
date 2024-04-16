
    export type RemoteKeys = 'federation_basket/Basket';
    type PackageType<T> = T extends 'federation_basket/Basket' ? typeof import('federation_basket/Basket') :any;