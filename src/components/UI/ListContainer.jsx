import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
export default function ListContainer({ children, title, styleProp }) {
	return (
		<>
			<Paper elevation={8} sx={{ borderRadius: "8px", ...styleProp }}>
				<Stack direction="column" justifyContent="center" alignItems="center">
					<Box
						sx={{
							backgroundColor: "#474747",
							width: "100%",
							borderTopLeftRadius: "8px",
							borderTopRightRadius: "8px",
						}}
					>
						<Typography
							component="div"
							sx={{
								fontSize: "18px",
								fontWeight: "600",
								margin: "8px",
								textAlign: "center",
								color: "white",
							}}
						>
							{title}
						</Typography>
					</Box>
					<Box sx={{ width: "100%" }}>{children}</Box>
				</Stack>
			</Paper>
		</>
	);
}
