
    export type RemoteKeys = 'federation_products/Products';
    type PackageType<T> = T extends 'federation_products/Products' ? typeof import('federation_products/Products') :any;