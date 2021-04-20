export default function ({ redirect }) {

  const data = JSON.parse(window.localStorage.getItem('login'))
  console.log(data)

  if(!data) {
  	return redirect('/')
  }

  if (!(data.login === 'mateus@a55.tech' && data.password === '123456')) {
  	window.alert('Sua tentativa de login foi falha')
  	return redirect('/')
  }
}
