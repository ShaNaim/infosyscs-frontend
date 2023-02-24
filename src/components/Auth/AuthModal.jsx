import styles from "@/styles/Auth.module.css";
import React from "react";
import Link from "next/link";
import BasicModal from "../Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Register from "./Authenticate";
import Image from "next/image";
import Auth from "./Auth";
export default function AuthModal({ setOpen, open }) {
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<BasicModal open={open} onClose={handleClose}>
				<Auth />
			</BasicModal>
		</>
	);
}
