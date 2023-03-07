import axios from "axios";
import api_url from "./url";
async function uploadFileForProcessing(formData, type, name) {
	try {
		const response = await axios.post(
			`${api_url}/files/process-data?type=${type}&reportName=${name}`,
			formData,
			{
				withCredentials: true,
				timeout: 0,
				headers: {
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "multipart/form-data",
				},
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function downloadDemo(selectedFile = 2, isReport = false) {
	try {
		const response = await axios.get(
			`${api_url}/files/demo/download?report=${isReport}&fileId=${selectedFile}`,
			{
				withCredentials: true,
				timeout: 0,
				headers: {
					"Access-Control-Allow-Credentials": true,
					"Access-Control-Allow-Origin": true,
					"Content-Type": "multipart/form-data",
				},
			}
		);
		console.log({ response: response.data });
		return response.data;
	} catch (error) {
		console.log({ error });
		throw error;
	}
}

async function checkCookie() {
	try {
		const response = await axios.post(
			`${api_url}/files/check`,
			{},
			{
				withCredentials: true,
				headers: { "Access-Control-Allow-Credentials": true, "Content-Type": "application/json" },
			}
		);
		console.log(response.data);
		return response;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	uploadFileForProcessing,
	checkCookie,
	downloadDemo,
};
