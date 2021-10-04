import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
const setHeaders = () => {
	axios.defaults.headers.post['Content-Type'] =
		'application/json;charset=utf-8';
	if (localStorage.getItem('token')) {
		axios.defaults.headers.common[
			'Authorization'
		] = `token ${localStorage.getItem('token')}`;
		console.log('token set ', localStorage.getItem('token'));
	}
};

export const getReq = async (enpoint) => {
	setHeaders();
	return await axios
		.get(`${enpoint}`)
		.then(({ data }) => {
			return data;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const postReq = async (enpoint, payload) => {
	setHeaders();
	return await axios
		.post(`${enpoint}`, payload)
		.then(({ data }) => {
			return data;
		})
		.catch((error) => {
			throw error;
		});
};
