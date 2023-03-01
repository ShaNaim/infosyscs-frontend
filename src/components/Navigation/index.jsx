import { selectAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";

import Footer from "./Footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
	const authState = useSelector(selectAuthState);
	return (
		<>
			<Navbar isLogedUser={authState.isLogedUser} />
			<main>{children}</main>
			<Footer />
		</>
	);
}
