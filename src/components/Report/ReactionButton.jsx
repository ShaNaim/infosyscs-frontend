import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";

export default function ReactionButton({ setReaction, openComment, reset }) {
	const [like, setLike] = useState(false);
	const [disLike, setDisLike] = useState(false);

	const handleLikeClick = () => {
		setReaction((prev) => (prev === "like" ? "" : "like"));
		setLike((prev) => {
			if (prev) {
				openComment(false);
			} else {
				openComment(true);
			}
			return !prev;
		});
		setDisLike(false);
	};

	const handleDisLikeClick = () => {
		setReaction((prev) => (prev === "dislike" ? "" : "dislike"));
		setDisLike((prev) => {
			if (prev) {
				openComment(false);
			} else {
				openComment(true);
			}
			return !prev;
		});
		setLike(false);
	};

	useEffect(() => {
		if (reset) {
			setDisLike(false);
			setLike(false);
		}
	}, [reset]);

	return (
		<>
			<Stack direction="row" justifyContent="center" spacing={2} sx={{ m: 2 }}>
				<IconButton onClick={handleLikeClick} aria-label="fingerprint" color="success">
					{like ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
				</IconButton>
				<IconButton onClick={handleDisLikeClick} aria-label="fingerprint" color="error">
					{disLike ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />}
				</IconButton>
			</Stack>
		</>
	);
}
