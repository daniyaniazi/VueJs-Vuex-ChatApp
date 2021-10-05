<template>
	<div class="chat-container">
		<div id="nav"><router-link to="/">Contacts</router-link></div>
		<b-card-group deck>
			<b-card
				border-variant="primary"
				:header="friend.username"
				header-bg-variant="primary"
				header-text-variant="white"
				align="center"
				v-if="friend"
			>
				<div class="chats-container" v-chat-scroll>
					<div
						class="chats"
						v-chat-scroll="{ always: false, smooth: true }"
						v-for="chat in chats"
						:key="chat.id"
					>
						<b-card-text
							v-if="
								chat.room === `${currentUser.pk + '_' + openChatUsername}` ||
								chat.room === `${openChatUsername + '_' + currentUser.pk}`
							"
							:class="`${chat.sendBy == currentUser.pk ? 'sent' : 'recieve'}`"
							><div>
								<small v-if="chat.sendBy == currentUser.pk"
									>You <span>{{ getTime(chat.time) }}</span></small
								>
								<small v-else>
									{{ friend.username }}
									<span>{{ getTime(chat.time) }}</span></small
								>
								<div>{{ chat.message }}</div>
							</div></b-card-text
						>
					</div>
				</div>
				<b-row class="my-3">
					<b-col sm="3">
						<label :for="`message`">Your message</label>
					</b-col>
					<b-col sm="6">
						<b-form-input
							:id="`message`"
							type="text"
							v-model="message"
						></b-form-input>
					</b-col>
					<b-col sm="3">
						<b-button variant="outline-primary" @click="sendNewMessage"
							>send</b-button
						>
					</b-col>
				</b-row>
			</b-card>
		</b-card-group>
	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';
export default {
	name: 'Chat',
	data() {
		return {
			openChatUsername: Number(this.$route.params.id),
			message: '',
		};
	},
	computed: {
		...mapGetters(['currentUser', 'chats', 'friend']),
		// from store
	},
	async created() {
		try {
			await this.getUser();
			await this.getFriendInfo(Number(this.openChatUsername));
			await this.loadUserChats({
				senderId: this.currentUser.pk,
				recieverId: Number(this.openChatUsername),
			});
		} catch (error) {
			console.log(error);
		}
	},

	methods: {
		...mapActions(['getUser', 'loadUserChats', 'sendMessage', 'getFriendInfo']),
		async sendNewMessage() {
			let newMessage = {
				room: `${this.currentUser.pk + '_' + this.openChatUsername}`,
				senderId: this.currentUser.pk,
				recieverId: this.openChatUsername,
				message: this.message,
				time: Date.now(),
				sendBy: this.currentUser.pk,
			};

			// firebase call
			await this.sendMessage(newMessage);
			this.message = '';
			await this.loadUserChats();
			console.log(this.chats);
		},
		getTime(timestamp) {
			console.log(moment(timestamp).format('hh:mm'));
			return moment(timestamp).format('hh:mm');
		},
	},
};
</script>

<style scoped>
.chat-container {
	width: 40%;
	margin: auto;
}
.chats-container {
	height: 380px;
	overflow-y: scroll;
}
.chats {
	margin-bottom: 5px;
}
.sent {
	text-align: right;
	padding: 10px;
	background: lightblue;
	margin-left: 30%;
}
.recieve {
	text-align: left;
	padding: 10px;
	background: lightgray;
	margin-right: 30%;
}
small {
	font-weight: 800;
	font-size: 12px;
}
@media screen and (max-width: 800px) {
	.chat-container {
		width: 60%;
	}
}
@media screen and (max-width: 600px) {
	.chat-container {
		width: 80%;
	}
}
</style>
