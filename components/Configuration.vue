<template>
	<div class="configuration" :class="{'active': status}">
		<ul>
			<li><nuxt-link @click.native="reload()" to="/dashboard">Dashboard</nuxt-link></li>
			<li><nuxt-link @click.native="reload()" to="/configuracoes">Configurações</nuxt-link></li>
			<li><a href="/" @click.prevent="logoff">Deslogar</a></li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'Configuration',
	props: {
		status: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	methods: {
		reload () {
			this.$emit('reload')
		},
		logoff () {
			this.$emit('logoff')
    }
	}
}
</script>
<style>
.configuration {
	width: 200px;
	position: absolute;
	top: 58px;
	background: #fafafa;
	padding: 10px;
	border-radius:  8px;
	box-shadow: 0 0 5px rgba(20,20,20,0.4);
	visibility: hidden;
	opacity: 0;
	transform: translateY(10px);
	transition:  all .2s ease-in-out;
}
.configuration.active {
	visibility: visible;
	opacity: 1;
	transform: translateY(0);
	transition:  all .2s ease-in-out;
}
.configuration:before {
	content: '';
	position: absolute;
	width: 16px;
	height: 8px;
	z-index: 2;
	background: #fafafa;
	top: -8px;
	right: 10px;
	clip-path: polygon(50% 0, 0% 100%, 100% 100%)
}
.configuration:after {
	content: '';
	z-index: 1;
	position: absolute;
	width: 18px;
	height: 9px;
	background: rgba(20,20,20,0.4);
	top: -9px;
	right: 9px;
	clip-path: polygon(50% 0, 0% 100%, 100% 100%)
}
.configuration ul {
	list-style-type: none;
	width: 100%;
	margin: 0;
	padding: 0;
}
.configuration a {
	height: 38px;
	display: flex;
	padding: 0 10px;
	align-items: center;
	border-bottom: 1px solid #ccc;
	color: #404041;
	text-decoration: none;
	transition:  all .2s ease-in-out;
}
.configuration li:last-child a {
	border-bottom: none;
}
.configuration a:hover {
	background: #ededed;
	transition:  all .2s ease-in-out;
}
</style>