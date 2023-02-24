import Navbar from "./navbar";
import Footer from "./Footer";
import { getCookie, getCookies, hasCookie, deleteCookie } from "cookies-next";
import { selectAuthState, setAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";
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
