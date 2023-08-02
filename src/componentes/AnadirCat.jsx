import { useState } from "react"

export const AnadirCat = ({onNuevaCategoria}) => {

  const [inputValor, setInputValor] = useState('');

  //desestructura el evento
  const inputCambio = ({target}) =>{
    setInputValor(target.value);
  }

  const onSubmit = (evento)=>{
    evento.preventDefault();
    const inputValorLimpio = inputValor.trim();
    if(inputValorLimpio.length <= 1) return;
    onNuevaCategoria(inputValorLimpio)
    //limpiarlo
    setInputValor('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"  
        value={inputValor} 
        onChange={inputCambio} 
      />
    </form>
  )
}
