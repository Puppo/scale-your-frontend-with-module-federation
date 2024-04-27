import type { User } from "./models/users";
interface ProductsRoutesProps {
    onUser: (user: User) => void;
}
export default function ProductsRoutes({ onUser }: ProductsRoutesProps): import("react/jsx-runtime").JSX.Element;
export {};
