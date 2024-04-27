import { Component } from "react";
interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback: React.ReactNode;
}
declare class ErrorBoundary extends Component<ErrorBoundaryProps, {
    hasError: boolean;
}> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: unknown): {
        hasError: boolean;
    };
    componentDidCatch(error: unknown, info: unknown): void;
    render(): import("react").ReactNode;
}
export default ErrorBoundary;
