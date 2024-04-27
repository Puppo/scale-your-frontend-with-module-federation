import { Component } from "react";

interface ErrorBoundaryProps {
	children: React.ReactNode;
	fallback: React.ReactNode;
}

class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	{ hasError: boolean }
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: unknown) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: unknown, info: unknown) {
		console.log(error, info);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return this.props.fallback;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
