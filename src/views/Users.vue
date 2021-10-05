<template>
	<div class="users-list">
		<b-container class="logout-container">
			<b-row class="my-4" align-h="end">
				<b-col sm="12" md="2">
					<b-button @click="logout" variant="danger">Logout</b-button></b-col
				></b-row
			></b-container
		>
		<b-list-group>
			<h2>Contacts</h2>
			<div v-for="user in allUsers" :key="user.pk">
				<b-list-group-item
					v-if="user.user_id != currentUser.pk"
					router-component-name="router-link"
					:to="`chat/${user.user_id}/`"
				>
					{{ user.email }}</b-list-group-item
				>
			</div>
		</b-list-group>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'Home',
	computed: {
		...mapGetters(['currentUser', 'allUsers']),
	},
	methods: {
		...mapActions(['getUser', 'getAllUsers']),
		logout() {
			localStorage.removeItem('token');
			this.$router.push('login/');
		},
	},
	async mounted() {
		try {
			await this.getUser();
			await this.getAllUsers();
		} catch (error) {
			console.log(error);
		}
	},
};
</script>

<style scoped>
.users-list {
	width: 40%;
	padding-top: 1%;
	margin: auto;
}
@media screen and (max-width: 800px) {
	.users-list {
		width: 60%;
	}
}
@media screen and (max-width: 600px) {
	.users-list {
		width: 80%;
	}
}
</style>
