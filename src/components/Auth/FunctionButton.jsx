import React from "react";
import Button from "@mui/material/Button";

export default function FunctionButton({ handleClick, children }) {
	return (
		<Button
			sx={{ width: "100%", height: "56px", mb: "12px", backgroundColor: "#076d29df" }}
			variant="contained"
			color="success"
			onClick={handleClick}
		>
			{children}
		</Button>
	);
}
