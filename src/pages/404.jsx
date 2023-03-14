import HeadUI from "@/components/UI/HeadUI";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
export default function NotFoundPage() {
	return (
		<>
			<HeadUI pageTitle={"Page Not Found"} />
			<Container sx={{ p: 4 }}>
				<Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
					<Box sx={{ width: { md: "35%", xs: "90%" } }}>
						<Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
							<Typography sx={{ fontSize: "84px", fontFamily: "monospace" }}>404</Typography>
							<Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={0}>
								<Typography sx={{ fontSize: "28px", fontFamily: "monospace" }}>
									Look like you're lost
								</Typography>
								<Typography sx={{ fontSize: "16px", fontFamily: "monospace" }}>
									the page you are looking for is not avaible!
								</Typography>
							</Stack>
							<Stack
								sx={{ width: "100%" }}
								direction="column"
								justifyContent="center"
								alignItems="flex-end"
								spacing={0}
							>
								<Button sx={{ backgroundColor: "#5CE1E6", color: "black", px: 2, py: 0 }}>
									<Link href="/">Go Home</Link>
								</Button>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</>
	);
}
