import { useState } from 'react'
import icone from './assets/img/icone_combustivel.png'

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('')
  
  function calcular(){

  }
  
  return (
    <>
      <div className='containerApp'>
        <div className="container">
          <img className='icone' src={icone} alt="imagem" />
          <h2>Álcool ou Gasolina?</h2>

          <form onSubmit={calcular}>
            <label htmlFor="">Preço do álcool</label>
            <input type="text" value={alcool} placeholder='Digite o preço do álcool' onChange={e=>setAlcool(e.target.value)}/>
            <label htmlFor="">Preço da gasolina</label>
            <input type="text" value={gasolina} placeholder='Digite o preço da gasolina' onChange={e=>setGasolina(e.target.value)}/>
            <button>Calcular</button>
          </form>
        </div>
      </div>
    </>
  )
}
