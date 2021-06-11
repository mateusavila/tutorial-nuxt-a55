<template>
	<a href="/" @click.prevent="logoff" class="logoff">Logoff</a>
</template>
<script>
	export default {
		name: 'Logoff',
		methods: {
			logoff () { this.$emit('logoff') }
		}
	}
</script>