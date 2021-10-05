import { getReq, postReq } from '../../../services/api';

const User = {
	state: {
		currentUser: null,
		allUsers: [],
		friend: null,
	},
	getters: {
		currentUser(state) {
			//   logged in user
			return state.currentUser;
		},
		allUsers(state) {
			//   logged in user
			return state.allUsers;
		},
		friend(state) {
			//   logged in user
			return state.friend;
		},
	},
	actions: {
		async registerUser(context, user) {
			// eslint-disable-next-line no-useless-catch
			try {
				const response = await postReq('registration/', user);
				return response;
			} catch (e) {
				const errors = e.response.data;
				const error = [];
				for (const key in errors) {
					if (Object.hasOwnProperty.call(errors, key)) {
						error.push(errors[key]);
					}
				}

				throw error[0][0];
			}
		},
		async loginUser(context, user) {
			try {
				const response = await postReq('login/', user);
				console.log(response);
				if (response.key) {
					localStorage.setItem('token', response.key);
					return response;
				}
			} catch (e) {
				const errors = e.response.data;
				const error = [];
				for (const key in errors) {
					if (Object.hasOwnProperty.call(errors, key)) {
						error.push(errors[key]);
					}
				}

				throw error[0][0];
			}
		},
		async getUser({ commit }) {
			try {
				const user = await getReq('user/');
				console.log(user);

				commit('setUser', user);
			} catch (error) {
				console.log(error);
				throw error;
			}
		},
		async getAllUsers({ commit }) {
			// await getReq('users/');
			try {
				const allUsers = await getReq('all-users');
				commit('setAllUsers', allUsers);
			} catch (error) {
				console.log(error);
			}
		},
		async getFriendInfo({ commit }, id) {
			// await getReq('users/');
			console.log('hetting info', id);
			try {
				const friendInfo = await getReq(`all-users/${id}`);
				commit('setFriendInfo', friendInfo);
			} catch (error) {
				console.log(error);
			}
		},
	},
	mutations: {
		setUser(state, user) {
			state.currentUser = user;
		},
		setAllUsers(state, allUsers) {
			state.allUsers = allUsers;
		},
		setFriendInfo(state, friendInfo) {
			state.friend = friendInfo;
		},
	},
};

export default User;
