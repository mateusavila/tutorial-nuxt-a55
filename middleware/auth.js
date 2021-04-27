export default function ({ redirect }) {

  const data = JSON.parse(window.localStorage.getItem('login'))
  // console.log(data)

  if(!data) {
  	return redirect('/')
  }
  
}
