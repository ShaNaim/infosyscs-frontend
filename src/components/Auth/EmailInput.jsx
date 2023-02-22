import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { boxSxObject, inputSxObject } from "./styles";
import FunctionButton from "./FunctionButton";
import { ValidateEmail } from "@/utils";
export default function EmailInput({ handleClick, email, setEmail }) {
	const [emailError, setEmailError] = React.useState(false);

	const handleEmail = () => {
		if (ValidateEmail(email)) {
			handleClick();
		} else {
			setEmailError(true);
		}
	};
	return (
		<>
			<Box sx={boxSxObject}>
				<TextField
					error={emailError}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					sx={inputSxObject}
					type="email"
					id="email-input"
					label="Email"
					variant="outlined"
					helperText={emailError && "Please Provide a Valid Email"}
				/>

				<FunctionButton handleClick={handleEmail}> Continue </FunctionButton>
			</Box>
		</>
	);
}
