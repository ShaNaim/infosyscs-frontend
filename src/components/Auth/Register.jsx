import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
export default function Register() {
	const [isEmail, setisEmail] = React.useState(true);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const handleClick = () => {
		console.log({ email, password });
	};
	const handleEdit = () => {
		setisEmail(true);
	};

	return (
		<>
			<Typography id="modal-modal-title" variant="h4" component="h2">
				Create Your Account
			</Typography>
			{isEmail ? (
				<EmailInput email={email} setEmail={setEmail} handleClick={() => setisEmail(false)} />
			) : (
				<PasswordInput
					handleClick={handleClick}
					password={password}
					setPassword={setPassword}
					email={email}
					handleEdit={handleEdit}
				/>
			)}
			<Typography id="modal-modal-title" variant="caption" component="span">
				Already Have an Account ?{" "}
				<Typography
					sx={{ color: "#14a0d8", "&:hover": { cursor: "pointer" }, fontSize: "14px" }}
					variant="caption"
					component="a"
				>
					Login
				</Typography>
			</Typography>
		</>
	);
}

const inputSxObject = {
	width: "100%",
	mb: "20px",
};
const boxSxObject = {
	width: { xs: "80%", md: "40%", lg: "50%" },
	minWidth: { xs: "70%", md: "40%", lg: "40%" },
};

function FunctionButton({ handleClick, children }) {
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

function EmailInput({ handleClick, email, setEmail }) {
	return (
		<>
			<Box sx={boxSxObject}>
				<TextField
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					sx={inputSxObject}
					id="email-input"
					label="Email"
					variant="outlined"
				/>

				<FunctionButton handleClick={handleClick}> Continue </FunctionButton>
			</Box>
		</>
	);
}

function PasswordInput({ handleClick, password, setPassword, email, handleEdit }) {
	return (
		<>
			<Box sx={boxSxObject}>
				{/* <TextField
					value={email}
					sx={inputSxObject}
					id="email-input"
					label="Email"
					variant="outlined"
					endAdornment={<InputAdornment position="end">EDIT</InputAdornment>}
					disabled
				/> */}
				<FormControl sx={inputSxObject} variant="outlined">
					<InputLabel htmlFor="editable-email-input">Email</InputLabel>
					<OutlinedInput
						id="editable-email-input"
						type="email"
						endAdornment={
							<InputAdornment position="end">
								<Button onClick={handleEdit}>EDIT</Button>
							</InputAdornment>
						}
						label="Password"
					/>
				</FormControl>
				<TextField
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					sx={inputSxObject}
					id="password-input"
					label="Password"
					variant="outlined"
				/>

				<FunctionButton handleClick={handleClick}> Create Account </FunctionButton>
			</Box>
		</>
	);
}
