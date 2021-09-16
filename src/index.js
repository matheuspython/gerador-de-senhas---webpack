import './assets/css/resets.css'
import './assets/css/style.css'
import Senha from './modules/Senha'

const senhaOutput = document.querySelector('.senha')

const senha = new Senha(senhaOutput)

document.addEventListener('click', e => {
  const el = e.target;
  if(el.classList.contains('start'))  senha.inicia()
})

