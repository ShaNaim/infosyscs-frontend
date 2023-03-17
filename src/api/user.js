import axios from "axios";
const api_url = process.env.NEXT_PUBLIC_API_URL;
export async function getAllUsers(token) {
	try {
		const response = await axios.get(`${api_url}/users`, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}
