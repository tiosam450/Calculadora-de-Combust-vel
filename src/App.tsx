import { FormEvent, useState } from 'react'
import icone from './assets/img/icone_combustivel.png'

interface Resultado{
  combustivel: string
  precoAlcool: string
  precoGasolina: string
}

export default function App() {
  const [alcool, setAlcool] = useState('')
  const [valueAlcool, setValueAlcool] = useState(0)
  const [gasolina, setGasolina] = useState('')
  const [valueGasolina, setValueGasolina] = useState(0)
  const [resultado, setResultado] = useState<Resultado>()
  
  function calcular(e: FormEvent) {
    let resultado = valueAlcool / valueGasolina
    e.preventDefault()
    if (alcool !== '' && gasolina !== ''&& alcool !== 'R$ 0,00' && gasolina !== 'R$ 0,00') {
      if (resultado <= 0.7) {
        setResultado({
          combustivel: 'álcool',
          precoAlcool: alcool,
          precoGasolina: gasolina,
        })
        setAlcool('')
        setGasolina('')
        // alert('Abasteça com álcool')
      } else {
        setResultado({
          combustivel: 'álcool',
          precoAlcool: alcool,
          precoGasolina: gasolina,
        })
        setAlcool('')
        setGasolina('')
        // alert('Abasteça com gasolina')
      }
    } else {
      alert('Preencha os dados corretamente!')
    }
  }

  function reset(){
    setResultado({
      combustivel: '',
      precoAlcool: alcool,
      precoGasolina: gasolina,
    })
  }


  // Máscara Moeda
  function fotmataValorAlcool(event: React.ChangeEvent<HTMLInputElement>): void {
    // Remove any non-numeric characters from the input
    let userInput: string = event.target.value.replace(/[^0-9]/g, '');

    if (userInput === '') {
      // If the input is empty, set the formatted valueAlcool to "R$ 0,00"
      setAlcool('R$ 0,00');
      setValueAlcool(0);
    } else {
      // Convert the input to a number and divide by 100 to get the valueAlcool in BRL
      let userInputAsNumber: number = parseInt(userInput, 10) / 100;

      // Format the number as BRL currency
      let formattedNumber: string = `R$ ${userInputAsNumber.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}`;

      // Update the state with the formatted valueAlcool and the user input
      setAlcool(formattedNumber);
      setValueAlcool(userInputAsNumber);
    }
  }

  function fotmataValorGasolina(event: React.ChangeEvent<HTMLInputElement>): void {
    // Remove any non-numeric characters from the input
    let userInput: string = event.target.value.replace(/[^0-9]/g, '');

    if (userInput === '') {
      // If the input is empty, set the formatted valueAlcool to "R$ 0,00"
      setGasolina('R$ 0,00');
      setValueGasolina(0);
    } else {
      // Convert the input to a number and divide by 100 to get the valueGasolina in BRL
      let userInputAsNumber: number = parseInt(userInput, 10) / 100;

      // Format the number as BRL currency
      let formattedNumber: string = `R$ ${userInputAsNumber.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}`;

      // Update the state with the formatted valueGasolina and the user input
      setGasolina(formattedNumber);
      setValueGasolina(userInputAsNumber);
    }
  }


  return (
    <>
      <div className='containerApp'>
        <div className="container">
          <img className='icone' src={icone} alt="imagem" />
          <h2>Álcool ou Gasolina?</h2>

          <form onSubmit={calcular}>
            <label htmlFor="">Preço do álcool</label>
            <input type="text" value={alcool} placeholder='Digite o preço do álcool' onChange={fotmataValorAlcool} />
            <label htmlFor="">Preço da gasolina</label>
            <input type="text" value={gasolina} placeholder='Digite o preço da gasolina' onChange={fotmataValorGasolina} />

            <button type='submit'>Calcular</button>
            <label className='reset' onClick={reset}>Reset</label>

          </form>
        </div>
        {resultado?.combustivel && Object.keys(resultado).length > 0 && <div className='resultado'>
          <h2>Vai de {resultado?.combustivel}</h2>
          <p>Preço do álcool <b>{resultado?.precoAlcool}</b></p>
          <p>Preço da gasolina <b>{resultado?.precoGasolina}</b></p>
        </div>}
      </div>
    </>
  )
}
