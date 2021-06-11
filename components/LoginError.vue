<template>
	<div class="error-box" :class="{'active': error.status}">
    <button type="button" class="error-box-close" @click.prevent="close">&times;</button>
    <div class="error-box-content">
      <h2>{{error.title}}</h2>
      <p>{{error.text}}</p>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'LoginError',
		props: {
			error: {
				type: Object,
				required: true
			}
		},
		methods: {
			close () { this.$emit('close') }
		}
	}
</script>
<style lang="stylus" scoped>
.error-box
	visibility hidden
	box-sizing border-box
	opacity 0
	min-height 0
	transition all .2s ease-in-out
	overflow hidden
	background #d63031
	position relative
	&.active
		transition all .2s ease-in-out
		visibility visible
		opacity 1
		min-height 95px
.error-box-content
	padding 20px
	color #fff
	text-align center
	h2
		line-height 1
		margin 0 0 10px
	p
		margin 0
.error-box-close
	position absolute
	right 10px
	top 10px
	cursor pointer
	
</style>