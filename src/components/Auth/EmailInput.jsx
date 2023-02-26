import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { boxSxObject, inputSxObject } from "./styles";
import FunctionButton from "./FunctionButton";
import { ValidateEmail } from "@/utils";

export default function EmailInput({ handleClick, isLogin, emailValue, nameValue }) {
	const [email, setEmail] = React.useState(emailValue ? emailValue : "");
	const [name, setName] = React.useState(nameValue ? nameValue : "");
	const [emailError, setEmailError] = React.useState(false);

	const handleEmail = () => {
		if (ValidateEmail(email)) {
			if (isLogin) return handleClick(email);
			return handleClick(email, name);
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
					label="Email*"
					variant="outlined"
					helperText={emailError && "Please Provide a Valid Email"}
				/>

				{!isLogin ? (
					<TextField
						value={name}
						onChange={(e) => setName(e.target.value)}
						sx={inputSxObject}
						type="text"
						id="name-input"
						label="Name"
						variant="outlined"
					/>
				) : (
					<></>
				)}

				<FunctionButton isLogin={isLogin} handleClick={handleEmail}>
					Continue
				</FunctionButton>
			</Box>
		</>
	);
}
