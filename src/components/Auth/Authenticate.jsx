import React from "react";
import Typography from "@mui/material/Typography";
import { ValidateEmail } from "@/utils";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
export default function Authenticate({ isLogin = false, handleSubmit }) {
	const [isEmail, setisEmail] = React.useState(true);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleClick = () => {
		handleSubmit({ email, password });
	};

	const handleEmail = () => {
		setisEmail(false);
	};

	const handleEdit = () => {
		console.log(email);
		if (ValidateEmail(email)) {
			setisEmail(true);
		}
	};

	return (
		<>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				{isLogin ? "Welcome Back" : "Create Your Account"}
			</Typography>
			{isEmail ? (
				<EmailInput email={email} setEmail={setEmail} handleClick={handleEmail} />
			) : (
				<PasswordInput
					isLogin={isLogin}
					handleClick={handleClick}
					password={password}
					setPassword={setPassword}
					email={email}
					handleEdit={handleEdit}
				/>
			)}
		</>
	);
}
