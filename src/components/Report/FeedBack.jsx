import { submitFeedbackForReport } from "@/api/report";
import { selectAuthState } from "@/store/authSlice";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import ReactionButton from "./ReactionButton";

export default function FeedBack({ reportId }) {
	const authState = useSelector(selectAuthState);
	const [reaction, setReaction] = useState("");
	const [comment, setComment] = useState("");
	const [open, setOpen] = useState(false);
	const [reset, setReset] = useState(false);

	const resetData = () => {
		setOpen(false);
		setReaction("");
		setComment("");
		setReset(true);
	};

	const onSubmit = async () => {
		try {
			setReset(false);
			await submitFeedbackForReport(
				{
					comment,
					reaction,
					reportId,
				},
				authState.accessToken
			);
			resetData();
		} catch (error) {
			console.error(error.response);
		}
	};
	const defaultColor = "rgba(26, 32, 29, 0.89)";
	const likeColor = "rgba(25, 129, 79, 0.89)";
	const disLikeColor = "rgba(163, 63, 63, 0.918)";
	return (
		<Box
			sx={{
				mt: 8,
				p: "32px 24px 12px 24px",
				boxShadow: `4px 4px 14px -4px ${
					reaction === "" ? defaultColor : reaction === "dislike" ? disLikeColor : likeColor
				}`,
				borderRadius: "8px",
				width: { xs: "100%", lg: "60%" },
			}}
		>
			<Typography
				component="div"
				variant="body2"
				sx={{
					textTransform: "capitalize",
					fontWeight: "600",
					textAlign: "center",
					width: "100%",
				}}
			>
				Tell Us Your Thoughts
			</Typography>
			<ReactionButton reset={reset} setReaction={setReaction} openComment={setOpen} />
			<Collapse in={open} timeout="auto" unmountOnExit>
				<TextField
					id="feedback-comments"
					label="Comments"
					multiline
					rows={4}
					sx={{ width: "100%", minWidth: "40vw" }}
					color="primary"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<Stack
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
					spacing={8}
					sx={{ mt: 2 }}
				>
					<Button
						sx={{
							backgroundColor: "#37bdc2",
							color: "white",
						}}
						variant="contained"
						color="primary"
						size="medium"
						onClick={onSubmit}
					>
						send
						<SendIcon sx={{ mx: 1 }} />
					</Button>
				</Stack>
			</Collapse>
		</Box>
	);
}
