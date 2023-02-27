import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

CircularProgress;
export default function index() {
	const router = useRouter();
	React.useEffect(() => {
		router.push("/dashboard");
	}, []);
	return <CircularProgress sx={{ margin: "auto" }} />;
}
