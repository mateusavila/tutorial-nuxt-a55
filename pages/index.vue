<template>
  <div class="container">
    <h1 class="title">
      <Logo /> Recursos Humanos
    </h1>
    <form action="#" method="POST" novalidate class="form-login" @submit.prevent="login">
      <fieldset class="fieldset">
        <legend>Formulário de Login</legend>
        <div class="field">
          <label for="login">Login</label>
          <input type="email" name="login" id="login" placeholder="Ex: teste@teste.com.br" autocomplete="new-password" required v-model="form.login" :class="{'error': error.login}">
        </div>
        <div class="field">
          <label for="password">Senha</label>
          <input type="password" name="password" id="password" placeholder="Digite sua senha" autocomplete="new-password" required v-model="form.password" :class="{'error': error.password}">
        </div>
        <div class="field">
          <button type="submit">Logar</button>
        </div>
      </fieldset>
    </form>
      <!-- <button @click="forceLogin" class="button--green">Forçar login de mentirinha</button> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        login: '',
        password: ''
      },
      error: {
        login: false,
        password: false,
        count: 0
      }
    }
  },
  methods: {
    login () {

      this.error.count = 0;

      if (this.form.login.length < 10) {
        this.error.login = true;
        this.error.count++;
      } else {
        this.error.login = false;
      }

      if (this.form.password.length < 6) {
        this.error.password = true;
        this.error.count++;
      } else {
        this.error.password = false;
      }

      if(this.error.count === 0) {
        fetch('https://wp.mateusavila.com.br/wp-json/fake/login', {
          method: 'post',
          body: JSON.stringify(this.form)
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log('deu certo', response)
            window.localStorage.setItem('login', JSON.stringify(data))
            this.$router.push({
              path: '/sobre'
            })
          })
          .catch(error => console.log('errou!!!', error))
          .finally(response => console.log('finalmente!!!', response))
      } else {
        return false
      }

      
    },
    calculate () {
      console.log('gerar calculo')
    }
    // forceLogin () {
    //   console.log('forceLogin')
    //   const loginData = {
    //     login: 'mateus@a55.tech',
    //     password: '123456'
    //   }
    //   window.localStorage.setItem('login', JSON.stringify(loginData))
    //   this.$router.push({
    //     path: '/sobre'
    //   })
    // }
  }
}
</script>
<style>
  .form-login {
    margin-top: 20px;
    width: 100%;
  }
  .field input {
    outline: none;
    width: 100%;
    padding: 0 10px;
    height: 45px;
    border-radius: 5px;
    border: 2px solid #ddd;
    transition: all .2s ease-in-out;
  }
  .field input:focus {
    border-color: #bababa;
    transition: all .2s ease-in-out;
  }
  .field input.error {
    border-color: red;
  }
</style>