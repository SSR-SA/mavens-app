import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.56:8000';

export const GetCourses = async (payload) => {
	try {
		const response = await axios.get(`/api/course`, payload);

		console.log('TEST');
		console.log(response.data);
		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`Unexpected response status: ${response.status}`);
		}
	} catch (error) {
		throw error;
	}
};
