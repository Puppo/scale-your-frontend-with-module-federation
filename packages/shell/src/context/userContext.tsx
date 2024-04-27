import { createContext, useContext, useState } from "react";

export interface User {
	id: number;
	username: string;
}

interface UserContext {
	user?: User;
	setUser: (user: User) => void;
}

const UserContext = createContext<UserContext | null>(null);

function UserProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | undefined>(undefined);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

const useUser = () => {
	const userContext = useContext(UserContext);
	if (!userContext) {
		throw new Error("UserContext not found");
	}
	return userContext;
};

export { UserProvider, useUser };
