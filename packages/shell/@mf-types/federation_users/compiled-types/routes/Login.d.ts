import type { User } from "../models/users";
interface LoginProps {
    onUserLogin: (user: User) => void;
}
export default function Login({ onUserLogin }: LoginProps): import("react/jsx-runtime").JSX.Element;
export {};
