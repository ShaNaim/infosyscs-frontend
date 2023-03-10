import { ValidateEmail } from "@/utils";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React from "react";

import FunctionButton from "./FunctionButton";
import { boxSxObject, inputSxObject } from "./styles";

export default function EmailInput({ handleClick, isLogin, emailValue, nameValue, contactValue }) {
	const [email, setEmail] = React.useState(emailValue ? emailValue : "");
	const [name, setName] = React.useState(nameValue ? nameValue : "");
	const [contact, setContact] = React.useState(contactValue ? contactValue : "");
	const [emailError, setEmailError] = React.useState(false);
	const [contactError, setContactError] = React.useState(false);

	const handleEmail = () => {
		try {
			if (ValidateEmail(email)) {
				if (isLogin) return handleClick(email);
				if (contact && contact.length > 9 && contact.length < 12) {
					return handleClick(email, name, contact);
				} else {
					setContactError(true);
				}
			} else {
				setEmailError(true);
			}
		} catch (error) {
			console.log(error);
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
					<>
						<TextField
							value={name}
							onChange={(e) => setName(e.target.value)}
							sx={inputSxObject}
							type="text"
							id="name-input"
							label="Name"
							variant="outlined"
						/>
						<TextField
							value={contact}
							InputProps={{
								startAdornment: <InputAdornment position="start">+880</InputAdornment>,
							}}
							onChange={(event) => setContact(event.target.value)}
							sx={inputSxObject}
							type="number"
							id="phone-input"
							label="Contact*"
							variant="outlined"
							error={contactError}
							helperText={contactError && "Please Provide a Valid Contact"}
						/>
					</>
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
