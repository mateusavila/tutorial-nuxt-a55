<template>
  <div class="container">
    <h1 class="title"><Logo /> Seja bem vindo</h1>
    <button @click="logoff" class="button--grey center-btn">Forçar logoff</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      user: {
        
      }
    }
  },
  mounted () {
    this.user = JSON.parse(window.localStorage.getItem('login'))
  },
  methods: {
    logoff () {
      console.log('logoff')
      window.localStorage.removeItem('login')
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style>
  .center-btn.button--grey {
    display: block;
    margin: 30px auto 0;
  }
</style>
