import TesteProps from "./TesteProps";

export default function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <Nome idade={30}/>
      <TesteProps teste='Oi testando som' volume={12}/>
    </>
  )
}

interface NomeProps{
  nome?: string,
  idade?: number,
}

function Nome ({nome="Default", idade}:NomeProps){
  return(
    <div>
      <h1>Nome: {nome}</h1>
      <h3>idade: {idade}</h3>
    </div>
  )
}