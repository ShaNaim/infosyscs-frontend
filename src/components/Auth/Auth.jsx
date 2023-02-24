import React from "react";
import styles from "@/styles/Auth.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Authenticate from "./Authenticate";
import { handleUserRegister, handleUserLogin, handleRequestError } from "@/api/auth";
import Image from "next/image";
import NotifyAlert from "../UI/NotifyAlert";
import { useRouter } from "next/router";
export default function Auth({ login = false, isPage = false }) {
	const router = useRouter();
	const [isLogin, setIsLogin] = React.useState(login);
	const [hasError, setHasError] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState(false);
	const google = () => {
		window.open("http://localhost:3050/api/v1/auth/google", "_self");
	};
	const handleSubmit = async (user) => {
		try {
			if (isLogin) {
				const response = await handleUserLogin(user);
				router.push("/dashboard");
			} else {
				const response = await handleUserRegister({
					...user,
					name: "",
					passwordConfirmation: user.password,
				});
				router.push("/dashboard");
			}
		} catch (error) {
			console.log(error);
			setErrorMessage(handleRequestError(error.response.data));
			setHasError(true);
		}
	};

	const handleRouteClick = () => {
		if (isPage) {
			return router.push(isLogin ? "/register" : "/login");
		}
		return setIsLogin((prev) => !prev);
	};
	return (
		<Box
			sx={{
				width: "100%",
				minHeight: "40vh",
				backgroundColor: "#fff",
				px: { xs: 2, md: 4, lg: 8 },
				py: 4,
				borderRadius: "18px",
			}}
		>
			<Stack direction="column" justifyContent="space-between" alignItems="center" spacing={1}>
				<Stack
					direction="column"
					justifyContent="space-between"
					alignItems="center"
					spacing={4}
					sx={{ width: "100%" }}
				>
					<Authenticate handleSubmit={handleSubmit} isLogin={isLogin} />
					<Typography
						sx={{ fontFamily: "monospace", fontWeight: 700 }}
						id="modal-modal-title"
						variant="caption"
						component="span"
					>
						{isLogin ? "Don't Have an Account ?" : "Already Have an Account ?"}
						<Typography
							sx={{
								color: "#14a0d8",
								"&:hover": { cursor: "pointer" },
								fontSize: "14px",
								ml: 1,
								fontFamily: "monospace",
								fontWeight: 300,
							}}
							variant="caption"
							component="a"
							onClick={handleRouteClick}
						>
							{isLogin ? "Register" : "Login"}
						</Typography>
					</Typography>

					<div className={styles.devider}>
						<span>OR</span>
					</div>
				</Stack>
				{/* <Link href="/api/login" passHref> */}
				<Button
					sx={{
						width: { xs: "80%", md: "40%", lg: "50%" },
						height: "56px",
						mb: "12px",
						backgroundColor: "#076d29df",
						fontFamily: "monospace",
						fontWeight: 400,
					}}
					variant="contained"
					color="success"
					onClick={google}
				>
					<Image
						src="/google.png"
						alt="Picture of the author"
						width={20}
						height={20}
						style={{ marginRight: "10px" }}
					/>
					Sign In With Google
				</Button>
				{/* </Link> */}
			</Stack>
			<NotifyAlert open={hasError} setOpen={setHasError} type="error" message={errorMessage} />
		</Box>
	);
}
