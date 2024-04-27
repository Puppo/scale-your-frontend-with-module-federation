
    export type RemoteKeys = 'federation_users/UsersApp';
    type PackageType<T> = T extends 'federation_users/UsersApp' ? typeof import('federation_users/UsersApp') :any;