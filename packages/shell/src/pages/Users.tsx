import UsersApp from "federation_users/UsersApp";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { type User, useUser } from "../context/userContext";

export default function () {
	const { setUser } = useUser();
	const navigate = useNavigate();

	const onUser = useCallback(
		(user: User) => {
			setUser(user);
			navigate("/products");
		},
		[setUser, navigate],
	);

	return <UsersApp onUser={onUser} />;
}
