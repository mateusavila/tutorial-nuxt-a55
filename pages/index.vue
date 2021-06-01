<template>
  <div class="container-login">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null,
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
      this.error.login = false;
      this.error.password = false;

      if (this.form.login.length < 10) {
        this.error.login = true;
        this.error.count++;
      }
      if (this.form.password.length < 6) {
        this.error.password = true;
        this.error.count++;
      } 
      if(this.error.count === 0) {
        fetch('https://wp.mateusavila.com.br/wp-json/fake/login', {
          method: 'post',
          body: JSON.stringify(this.form)
        })
          .then((response) => response.json())
          .then((data) => {
            window.localStorage.setItem('login', JSON.stringify(data))
            this.$router.push({
              path: '/dashboard'
            })
          })
          .catch(error => console.log('errou!!!', error))
      }
      // faz uma limpeza de alguns segundos depois do erro do e-mail, para não ficar assustando o usuário
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.error.login = false
        this.error.password = false
      }, 4000)
      return false
    }
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