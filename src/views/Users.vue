<template>
	<div class="users-list">
		<b-list-group>
			<b-list-group-item router-component-name="router-link" to="chat/1">
				User1</b-list-group-item
			>
			<b-list-group-item router-component-name="router-link" to="chat/2">
				User2</b-list-group-item
			>
			<b-list-group-item router-component-name="router-link" to="chat/3">
				User3</b-list-group-item
			>
		</b-list-group>
	</div>
</template>

<script>
export default {
	name: 'Home',
	mounted() {
		// SET CURRENT USER
		// GET LIST OF USER
	},
};
</script>

<style scoped>
.users-list {
	width: 60%;
	margin: auto;
}
</style>
