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
				<InputLabel id="demo-simple-select-label">File Type</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
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
