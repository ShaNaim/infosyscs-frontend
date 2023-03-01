import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ items, type, setType }) {
	const handleChange = (event) => {
		setType(event.target.value);
	};
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel sx={{ color: "white" }} id="file-type-select">
					File Type
				</InputLabel>
				<Select
					sx={{ color: "white", border: "1px solid white" }}
					labelId="file-type-select"
					id="file-type-select-id"
					value={type}
					label="File Type"
					onChange={handleChange}
				>
					{items.map((item) => {
						return (
							<MenuItem key={item.value} value={item.value}>
								{item.name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
}
