import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const element = document.getElementById("root");

if (!element) {
	throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(element);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
