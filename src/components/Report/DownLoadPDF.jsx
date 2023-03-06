import * as React from "react";
import ReactToPrint from "react-to-print";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { ComponentToPrint } from "./ComponentToPrint";

export const DownLoadPDF = ({ displayData, reportName }) => {
	const componentRef = React.useRef(null);

	const onBeforeGetContentResolve = React.useRef(null);

	const [loading, setLoading] = React.useState(false);
	const [text, setText] = React.useState("old boring text");

	const handleAfterPrint = React.useCallback(() => {
		console.log("`onAfterPrint` called");
	}, []);

	const handleBeforePrint = React.useCallback(() => {
		console.log("`onBeforePrint` called");
	}, []);

	const handleOnBeforeGetContent = React.useCallback(() => {
		console.log("`onBeforeGetContent` called");
		setLoading(true);
		setText("Loading new text...");

		return new Promise((resolve) => {
			onBeforeGetContentResolve.current = resolve;

			setTimeout(() => {
				setLoading(false);
				setText("New, Updated Text!");
				resolve();
			}, 20);
		});
	}, [setLoading, setText]);

	React.useEffect(() => {
		if (text === "New, Updated Text!" && typeof onBeforeGetContentResolve.current === "function") {
			onBeforeGetContentResolve.current();
		}
	}, [onBeforeGetContentResolve.current, text]);

	const reactToPrintContent = React.useCallback(() => {
		return componentRef.current;
	}, [componentRef.current]);

	const reactToPrintTrigger = React.useCallback(() => {
		return (
			<Button variant="contained" endIcon={<DownloadIcon />}>
				Download Report
			</Button>
		);
	}, []);

	return (
		<div>
			<Stack
				sx={{
					width: "100%",
				}}
				direction="column"
				alignItems="center"
				justifyContent="center"
				spacing={2}
			>
				<ReactToPrint
					content={reactToPrintContent}
					documentTitle={reportName ?? "AwesomeFileName"}
					onAfterPrint={handleAfterPrint}
					onBeforeGetContent={handleOnBeforeGetContent}
					onBeforePrint={handleBeforePrint}
					removeAfterPrint
					trigger={reactToPrintTrigger}
				/>
				{loading && <p className="indicator">onBeforeGetContent: Loading...</p>}
				<div style={{ width: "295px", height: "542px", display: "none" }}>
					<ComponentToPrint displayData={displayData} ref={componentRef} text={text} />
				</div>
			</Stack>
		</div>
	);
};
