<template>
	<nav>
		<ul>
			<li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
			<li><nuxt-link to="/employees">Empregados</nuxt-link></li>
			<li><nuxt-link to="/jobs">Cargos</nuxt-link></li>
			<li><nuxt-link to="/areas">Áreas da Empresa</nuxt-link></li>
			<li><nuxt-link to="/benefits">Benefícios</nuxt-link></li>
		</ul>
		<ul>
			<li><nuxt-link to="/configuration">Configurações</nuxt-link></li>
			<li><Logoff @logoff="logoff" /></li>
		</ul>
	</nav>
</template>
<script>
	export default {
		name: "Navigation",
		methods: {
			logoff () { this.$emit('logoff') }
		}
	}
</script>
<style lang="stylus" scoped>
	nav
		background #0096FF
		width 200px
		padding 50px 20px
		min-height 300px
		li
			line-height 2
		a
			color #fff
			text-decoration none
			&:hover
				text-decoration underline
			&.logoff
				color red
		ul
			padding 0
			margin 0
			list-style-type none
			&:last-child
				margin-top 30px
				padding-top 30px
				border-top 1px solid #fff
</style>