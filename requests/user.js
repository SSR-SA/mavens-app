import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.56:8000';

export const userLogin = async (payload) => {
	try {
		console.log(payload);
		const response = await axios.post(`/api/user/login`, payload);

		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
export const userSignUp = async (payload) => {
	try {
		console.log(payload);
		const response = await axios.post('/api/user/register', payload);

		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
export const getUsers = async () => {};
export const getTeachers = async () => {};
