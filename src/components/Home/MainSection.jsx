import FileUpload from "@/components/FileUploader/inedx";
import Demo from "@/components/Home/Demo";
import Hero from "@/components/Home/Hero";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
export default function MainSection() {
	return (
		<>
			<Paper
				elevation={4}
				sx={{
					p: 3,
					bgcolor: "#474747",
					mt: 1,
					color: "white",
					borderRadius: "12px",
					width: { xs: "100%", md: "90%" },
				}}
			>
				<Hero />
			</Paper>
			<Paper
				elevation={4}
				sx={{
					p: 3,
					bgcolor: "#474747",
					color: "white",
					borderRadius: "12px",
					width: { xs: "100%", md: "90%" },
				}}
			>
				<Stack
					sx={{ width: "100%" }}
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
				>
					<Typography
						variant="h6"
						component="h2"
						sx={{
							fontWeight: 600,
							fontSize: { xs: "22px", md: "20px" },
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Try Demo
					</Typography>

					<Demo />
				</Stack>
			</Paper>
			<Paper
				elevation={4}
				sx={{
					bgcolor: "#474747",
					color: "white",
					borderRadius: "12px",
					width: { xs: "100%", md: "90%" },
				}}
			>
				<Stack
					sx={{ width: "100%" }}
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
				>
					<Typography
						variant="h6"
						component="h2"
						sx={{
							fontWeight: 600,
							fontSize: { xs: "22px", md: "20px" },
							color: "inherit",
							textDecoration: "none",
							mt: "20px",
						}}
					>
						Thematic Analysis
					</Typography>
					<Alert
						sx={{
							width: { xs: "95%", md: "60%", lg: "50%" },

							color: "tomato",
						}}
						severity="warning"
					>
						<AlertTitle sx={{ color: "tomato" }}>Warning</AlertTitle>
						<ul>
							<li>
								Maximum <strong>5 files</strong> can be uploaded at a time.
							</li>
							<li>
								All files must be of <strong>Same Type</strong>.
							</li>
							<li>
								Each File Can not exceed <strong> 500 kb </strong> in size.
							</li>
						</ul>
					</Alert>
					<FileUpload />
				</Stack>
			</Paper>
		</>
	);
}
