<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        RH maravilhoso da a55!
      </h1>
      <div class="links">
        <button @click="forceLogin" class="button--green">Forçar login de mentirinha</button>
        <button @click="forceLoginFail" class="button--grey">Forçar um login falso</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    forceLogin () {
      console.log('forceLogin')
      const loginData = {
        login: 'mateus@a55.tech',
        password: '123456'
      }
      window.localStorage.setItem('login', JSON.stringify(loginData))
      this.$router.push({
        path: '/sobre'
      })
    },
    forceLoginFail () {
      console.log('forceLoginFail')
      const loginData = {
        login: 'carol@a55.tech',
        password: '654321'
      }
      window.localStorage.setItem('login', JSON.stringify(loginData))
      this.$router.push({
        path: '/sobre'
      })
    }
  }
}
</script>
