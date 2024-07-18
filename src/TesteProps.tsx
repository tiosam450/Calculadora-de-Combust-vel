interface TesteProps{
    teste?:string,
    volume?: number,
}


export default function TesteProps({teste, volume = 15}:TesteProps){
   return(
    <>
     <h1>{teste}, volume {volume}</h1>
    </>
   )
}