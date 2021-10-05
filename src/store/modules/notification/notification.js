const state = {
	notification: {
		msg: null,
		type: null,
		color: null,
	},
};

const getters = {
	notification: (state) => state.notification,
};

const actions = {
	async setNotification({ commit }, notification) {
		commit('newNotification', notification);
	},
};

const mutations = {
	newNotification: (state, notification) =>
		(state.notification = { ...notification }),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
