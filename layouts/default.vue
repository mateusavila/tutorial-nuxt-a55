<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  cursor: pointer;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  cursor: pointer;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.container-login {
  width: calc(100% - 64px);
  max-width: 1150px;
  margin: 0 auto;
  min-height: 600px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.field {
  width: 100%;
  margin-bottom: 20px;
}
.fieldset {
  width: calc(100% - 50px);
  margin: 0 auto;
  max-width: 500px;
  background: #f7f7f7;
  padding: 20px 20px 5px;
  text-align: left;
  border-radius: 10px;
  box-shadow: 0px 10px 5px rgba(20,20,20,0.3);
}
.fieldset legend {
  padding: 0 10px;
  text-transform: uppercase;
  color: #454545;
  margin: 0 auto;
}
.field label {
  font-size: 14px;
  width: 100%;
  display: block;
  margin-bottom: 3px;
  color: #404041;
}

.field button {
  background: #108775;
  color: #fff;
  border-radius: 6px;
  border: none;
  margin: 0 auto;
  display: block;
  width: 100px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}
.field button:hover {
  background: #2F495E;
  transition: all .2s ease-in-out;
}

@media all and (max-width: 600px) {
  .container-login  {
    width: calc(100% - 30px);
  }
  .fieldset {
    width: 100%;
  }
  .title {
    font-size: 20px;
  }
}
</style>
