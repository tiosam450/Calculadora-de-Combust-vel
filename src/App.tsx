import { FormEvent, useState } from 'react'
import icone from './assets/img/icone_combustivel.png'

export default function App() {
  const [alcool, setAlcool] = useState('')
  const [valueAlcool, setValueAlcool] = useState(0)
  const [gasolina, setGasolina] = useState('')
  const [valueGasolina, setValueGasolina] = useState(0)
  const [on, setOn] = useState(false)
  let resultado = valueAlcool / valueGasolina

  function calcular(e:FormEvent) {
    e.preventDefault()
    if(alcool !=='' && gasolina !==''){
      setOn(true)
      if(resultado <= 0.7){
        alert('Abasteça com álcool')
      }else{
        alert('Abasteça com gasolina')
      }
    }else{
      alert('Preencha os dados corretamente!')
    }
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
            <button>Calcular</button>
          </form>
        </div>
      </div>
    </>
  )
}
