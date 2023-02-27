import React from "react";
import HeadUI from "@/components/UI/HeadUI";
export default function NotFoundPage() {
	return (
		<>
			<HeadUI pageTitle={"Page Not Found"} />
			<div style={{ width: "100%", height: "100vh" }}>
				<div style={{ margin: "auto", width: "20%" }}>
					<div style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}>
						Page Not Found
					</div>
					<div style={{ margin: "auto", textAlign: "right" }}> Page Not Found </div>
					<div style={{ margin: "auto", textAlign: "right" }}> Page Not Found </div>
				</div>
			</div>
		</>
	);
}
