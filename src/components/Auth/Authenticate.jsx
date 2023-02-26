import React from "react";
import Typography from "@mui/material/Typography";
import { ValidateEmail } from "@/utils";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import Register from "./Register";
import Login from "./Login";
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
			{isLogin ? <Login handleSubmit={handleSubmit} /> : <Register handleSubmit={handleSubmit} />}
		</>
	);
}
