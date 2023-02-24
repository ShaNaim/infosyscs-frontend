import React from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
CircularProgress;
export default function index() {
	const router = useRouter();
	React.useEffect(() => {
		router.push("/dashboard");
	}, []);
	return <CircularProgress sx={{ margin: "auto" }} />;
}
