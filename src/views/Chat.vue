<template>
	<div class="chat-container">
		<b-card-group deck>
			<b-card
				border-variant="primary"
				:header="openChatUsername"
				header-bg-variant="primary"
				header-text-variant="white"
				align="center"
			>
				<div
					class="chats"
					v-chat-scroll="{ always: false, smooth: true }"
					v-for="chat in chats"
					:key="chat.id"
				>
					<b-card-text
						v-if="
							chat.senderId == currentUser &&
							chat.recieverId == openChatUsername
						"
						:class="`${chat.sendBy == currentUser ? 'sent' : 'recieve'}`"
						>{{ chat.message }}</b-card-text
					>
				</div>
				<b-row class="my-3">
					<b-col sm="2">
						<label :for="`message`">Your message</label>
					</b-col>
					<b-col sm="8">
						<b-form-input
							:id="`message`"
							type="text"
							v-model="message"
						></b-form-input>
					</b-col>
					<b-col sm="2">
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
export default {
	name: 'Chat',
	data() {
		return {
			openChatUsername: this.$route.params.id,
			message: '',
		};
	},
	computed: {
		...mapGetters(['currentUser', 'chats']),
		// from store
	},
	async created() {
		await this.loadUserChats({
			senderId: this.currentUser,
			recieverId: Number(this.openChatUsername),
		});
	},
	methods: {
		...mapActions(['loadUserChats', 'sendMessage']),
		async sendNewMessage() {
			let newMessage = {
				senderId: this.currentUser,
				recieverId: this.openChatUsername,
				message: this.message,
				time: Date.now(),
				sendBy: this.currentUser,
			};
			console.log(newMessage);
			// firebase call
			await this.sendMessage(newMessage);
			await this.loadUserChats();
			this.message = '';
		},
	},
};
</script>

<style scoped>
.chat-container {
	width: 60%;
	margin: auto;
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
</style>
