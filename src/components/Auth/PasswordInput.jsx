import React from "react";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FunctionButton from "./FunctionButton";
import { boxSxObject, inputSxObject } from "./styles";
export default function PasswordInput({
	handleClick,
	password,
	setPassword,
	email,
	handleEdit,
	isLogin,
}) {
	const [showPassword, setShowPassword] = React.useState(false);
	const [passwordError, setPasswordError] = React.useState(false);

	const handleSubmit = () => {
		if (password === "") return setPasswordError(true);
		return handleClick();
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<Box sx={boxSxObject}>
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
						value={email}
					/>
					<FormControl sx={{ ...inputSxObject, marginTop: "20px" }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
						<OutlinedInput
							error={passwordError}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="outlined-adornment-password"
							type={showPassword ? "text" : "password"}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>
				</FormControl>

				<FunctionButton handleClick={handleSubmit}>
					{isLogin ? "Login" : "Create Account"}
				</FunctionButton>
			</Box>
		</>
	);
}
