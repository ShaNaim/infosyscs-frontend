import React from "react";
import BasicSelect from "../UI/BasicSelect";
export default function FileUploadSeclector() {
	const [type, setType] = useState(null);
	const Types = [
		{
			value: 1,
			name: "FGD",
			type: "pdf",
		},
		{
			value: 2,
			name: "KLL",
			type: "docx",
		},
	];
	return (
		<>
			<BasicSelect />
		</>
	);
}
