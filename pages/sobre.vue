<template>
  <div class="container">
    <h2>Sobre o RH</h2>
    <button @click="logoff" class="button--grey">Forçar logoff</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
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
