import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Heading from "./Heading";
import Points from "./Points";
import data from "./TC.json";

export default function TermsAndConditions() {
	const points = data.termsAndConditions;
	const footer = data.termsFooter;
	return (
		<>
			<Box sx={{ bgcolor: "#faf9f9", padding: "16px 32px 16px 32px " }}>
				<Box sx={{ marginTop: "4%" }}>
					<Stack
						direction={{ xs: "column", sm: "column" }}
						justifyContent="center"
						alignItems="start"
					>
						<Heading />
						{points.map((value, index) => (
							<Points count={index + 1} key={index} data={value} />
						))}
						{/* <Points data={footer} /> */}
						<Typography
							sx={{
								fontSize: "18px",
								fontWeight: "600",
								mr: 1,
								fontFamily: "Roboto Mono",
								fontWeight: 300,
								textAlign: "center",
								width: "100%",
							}}
							variant="caption"
							component="span"
						>
							{footer}
						</Typography>
					</Stack>
				</Box>
			</Box>
		</>
	);
}
