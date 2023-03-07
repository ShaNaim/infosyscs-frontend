import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Paper, Typography } from "@mui/material";
import React from "react";

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
