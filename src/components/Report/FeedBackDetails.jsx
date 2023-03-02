import React from "react";
import { Paper, Box, Stack, Typography } from "@mui/material";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
export default function FeedBackDetails({ data }) {
	return (
		<>
			{data.length !== 0 ? (
				<>
					{data.map((feedback) => {
						return (
							<Paper sx={{ p: 2, borderLeft: "2px solid burlywood" }}>
								<Typography sx={{ fontSize: "18px" }}>Comment : {feedback.comment}</Typography>
								<Typography sx={{ fontSize: "18px" }}>
									Reaction: <Reaction reaction={feedback.reaction} />
								</Typography>
							</Paper>
						);
					})}
				</>
			) : (
				<span> No Feedback </span>
			)}
		</>
	);
}

export function Reaction({ reaction }) {
	if (reaction === "LIKE") return <ThumbUpAltIcon color="success" />;
	else if (reaction === "DISLIKE") return <ThumbDownIcon color="error" />;
	else return <span> NONE </span>;
}
