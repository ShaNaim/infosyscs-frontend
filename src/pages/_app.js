import "@/styles/globals.css";
import Layout from "@/components/Navigation";
import Cookies from "universal-cookie";
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
function App({ Component, pageProps }) {
	const store = useStore();
	return (
		<PersistGate
			persistor={store.__persistor}
			loading={
				<div>
					<CircularProgress />
				</div>
			}
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</PersistGate>
	);
}

export default wrapper.withRedux(App);
