import db from '../../../firebase/firebase';
import {
	ref,
	set,
	onValue,
	push,
	query,
	orderByValue,
} from 'firebase/database';
const Chats = {
	state: {
		chats: [],
	},
	getters: {
		chats(state) {
			// where sender == sender and reciever == reciver loade by action
			return state.chats;
		},
	},
	actions: {
		async sendMessage(context, payload) {
			console.log(payload);
			const postListRef = await ref(db, 'messeges');
			const newPostRef = await push(postListRef);
			await set(newPostRef, {
				...payload,
			});
			// context.dispatch('loadUserChats');
		},
		async loadUserChats({ commit }) {
			const chatsRef = await query(ref(db, 'messeges'), orderByValue('time'));
			await onValue(chatsRef, (snapshot) => {
				let messeges = [];
				snapshot.forEach(function (chatSnapshot) {
					var chat = chatSnapshot.val();
					messeges.push(chat);
					commit('setChats', messeges);
				});
			});
		},
	},
	mutations: {
		setChats(state, payload) {
			state.chats = payload;
		},
	},
};

export default Chats;
