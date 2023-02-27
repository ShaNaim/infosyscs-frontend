import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Heading from "./Heading";
import Points from "./Points";
export default function index() {
	return (
		<>
			<Box sx={{ bgcolor: "#faf9f9" }}>
				<Box sx={{ marginTop: "8%" }}>
					<Stack
						direction={{ xs: "column", sm: "column" }}
						justifyContent="center"
						alignItems="start"
					>
						<Heading />
						{[1, 2, 3, 4, 5].map((value) => (
							<Points count={value} key={value} />
						))}
					</Stack>
				</Box>
			</Box>
		</>
	);
}
