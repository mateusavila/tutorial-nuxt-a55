export default function ({ redirect }) {

  const userLogged = JSON.parse(window.localStorage.getItem('login'))

  if(!userLogged) {
  	return redirect('/')
  }
  
}
