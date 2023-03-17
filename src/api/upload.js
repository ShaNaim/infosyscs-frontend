import axios from "axios";
const api_url = process.env.NEXT_PUBLIC_API_URL;
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
				responseType: "arraybuffer",
				headers: {
					"Access-Control-Allow-Credentials": true,
					"Access-Control-Allow-Origin": true,
					"Content-Type": "multipart/form-data",
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error(error);
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
