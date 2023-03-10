import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function FileDetails({ name, size, index }) {
	function calculateKBValue(value) {
		return Math.ceil(value / 1000);
	}
	return (
		<>
			<Stack
				direction={{ xs: "row", md: "row" }}
				justifyContent="space-between"
				alignItems="center"
				spacing={2}
			>
				<span>{index}</span>
				<TextField
					sx={{ width: "100%" }}
					id="token-used"
					label="File Name"
					value={name}
					variant="filled"
				/>
				<TextField
					sx={{ width: "100%" }}
					id="tokne-const"
					label="File Size"
					value={calculateKBValue(size) + " KB"}
					variant="filled"
				/>
			</Stack>
		</>
	);
}
