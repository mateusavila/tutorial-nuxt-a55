<template>
  <div class="container">
    <h1 class="title"><Logo /> Configurações</h1>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.user = JSON.parse(window.localStorage.getItem('login'))
  },
}
</script>
<style>
  .center-btn.button--grey {
    display: block;
    margin: 30px auto 0;
  }
</style>
