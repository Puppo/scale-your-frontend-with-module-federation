import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import Routes from "./routes/routes";

import "./App.css";

export default function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</UserProvider>
	);
}
