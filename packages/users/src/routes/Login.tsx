import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../models/users";
import { login } from "../services/users";

interface LoginForm {
	username: string;
	password: string;
}

interface LoginProps {
	onUserLogin: (user: User) => void;
}

export default function Login({ onUserLogin }: LoginProps) {
	const navigate = useNavigate();

	const { mutate: onSubmit } = useMutation({
		mutationFn: (payload: LoginForm) =>
			login(payload.username, payload.password),
		onSuccess: onUserLogin,
	});

	const handleSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			const data = new FormData(event.currentTarget);
			const username = data.get("username") as string;
			const password = data.get("password") as string;

			if (username && password) {
				onSubmit({ username, password });
			}
		},
		[onSubmit],
	);

	return (
		<>
			<div>Login</div>

			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input type="username" name="username" />
				</label>
				<label>
					Password:
					<input type="password" name="password" />
				</label>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}
