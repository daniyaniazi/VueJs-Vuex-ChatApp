<template>
	<div class="noti-container">
		<div :class="notification.color" v-if="notification.msg">
			{{ notification.msg }}

			<button color="white" class="closebtn" text @click="closeSnackBar">
				X
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'Notification',
	methods: {
		...mapActions(['setNotification']),
		closeSnackBar() {
			this.setNotification({
				type: null,
				msg: null,
				color: null,
			});
		},
	},
	computed: mapGetters(['notification']),
	async mounted() {
		setTimeout(() => {
			this.setNotification({
				type: null,
				msg: null,
				color: null,
			});
		}, 3000);
	},
	destroyed() {
		this.setNotification({
			type: null,
			msg: null,
			color: null,
		});
	},
};
</script>

<style>
.noti-container {
	height: 100px;
	display: flex;
	justify-content: center;
	align-self: center;
}
.red {
	background-color: #ff4949;
	color: white;
	width: 50%;
	margin: auto;
	padding: 1%;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	align-self: center;
}
.green {
	background-color: #3aca76;
	color: white;
	width: 50%;
	margin: auto;
	padding: 1%;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	align-self: center;
}
.closebtn {
	background-color: white;
	border: none;
	height: 20px;
	width: 20px;
	border-radius: 51%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: small;
}
@media screen and (max-width: 800px) {
	.red {
	}
}
@media screen and (max-width: 600px) {
	.red {
	}
}
</style>
