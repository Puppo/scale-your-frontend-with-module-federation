import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import type { User } from "./models/users";

const element = document.getElementById("root");

if (!element) {
	throw new Error("Root element not found");
}

const onUser = (user: User) => {
	alert(`User ${user.name.firstname} ${user.name.lastname} logged in`);
};

const root = ReactDOM.createRoot(element);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App onUser={onUser} />
		</BrowserRouter>
	</React.StrictMode>,
);
