<template>
  <header>
    <div class="container">
      <div class="logo-text">
        <Logo />
        <p>| Dashboard</p>
        <form action="#" method="post" @submit.prevent="makeSearch">
          <input type="search" name="search" v-model="search" placeholder="Digite sua busca">
          <button type="submit">busca</button>
        </form>
      </div>
      <div class="config-area">
        <img :src="user.payload.photo.url" :alt="user.payload.name" :width="user.payload.photo.width" :height="user.payload.photo.height" loading="lazy" @click="status = !status">
        <Configuration 
          @logoff="logoff"
          @reload="reload" 
          :status="status" />
      </div>

    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      status: false,
      user: {
        payload: {
          name: '',
          photo:  {
            url: '',
            width: 0,
            height: 0
          }
        }
      }
    }
  },
  mounted () {
    this.user = JSON.parse(window.localStorage.getItem('login'))
  },
  methods: {
    makeSearch () {
      // console.log('O termo buscado é ' + this.search)
      fetch('https://wp.mateusavila.com.br/wp-json/wp/v2/posts?slug='+this.search)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          
        })
        .catch(error => console.log('errou!!!', error))
    },
    logoff () { this.$emit('logoff') },
    reload () { this.status = !this.status }
  }
}
</script>
<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fafafa;
  border-bottom: 1px solid #ccc;
  z-index: 100;
}
header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
}
header .logo-text {
  display: flex;
  max-width: 200px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
}
header .logo-text p{
  font-size: 20px;
  color: #0096FF;
}
header .config-area {
  display: flex;
  max-width:  200px;
  width: 100%;
  align-items:  center;
  justify-content: flex-end;
}
header .config-area img {
  width: 32px;
  height: 32px;
  object-fit: cover;
  display: inline-block;
  border-radius: 100%;
  cursor: pointer;
}

.center-btn.button--grey {
  display: block;
}
</style>
