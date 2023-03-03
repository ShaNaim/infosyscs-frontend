import "@/styles/globals.css";

import Layout from "@/components/Navigation";
import Loading from "@/components/UI/Loading";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { wrapper } from "../store/store";

function App({ Component, pageProps }) {
	const store = useStore();
	return (
		<PersistGate
			persistor={store.__persistor}
			loading={
				<div>
					<Loading />
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
