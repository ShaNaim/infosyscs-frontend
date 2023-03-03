import { selectAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";

import Footer from "./Footer";
import Navbar from "./Navbar";

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

// sudo ln -s /etc/nginx/sites-available/infosyscs_frontend /etc/nginx/sites-enabled/infosyscs_frontend
// sudo certbot --nginx -d infosyscs.org
// sudo certbot --nginx -d domainname.com
// certbot run -a webroot -i nginx -w /var/www/infosyscs/InfoSysCs_FInal/.next/static/ -d www.infosyscs.org -d infosyscs.org
// pm2 start npm --name frontend -- start
// sudo certbot --nginx -d infosyscs.org -d www.infosyscs.org
