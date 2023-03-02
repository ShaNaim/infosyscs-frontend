import axios from "axios";
export async function getAllUsers(token) {
	try {
		const response = await axios.get("http://localhost:3050/api/v1/users", {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}
