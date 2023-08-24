import { useState } from "react"

export const AnadirCat = ({onNuevaCategoria, onNuevoLimite}) => {

  const [inputValor, setInputValor] = useState('');
  const [limite, setLimite] = useState(5);

  //desestructura el evento
  const inputCambio = ({target}) =>{
    setInputValor(target.value);
  }

  const limiteCambio = ({target}) =>{
    setLimite(target.value);
    console.log(limite);
  }

  const onSubmit = (evento)=>{
    evento.preventDefault();
    const inputValorLimpio = inputValor.trim();
    if(inputValorLimpio.length <= 1) return;
    onNuevaCategoria(inputValorLimpio);
    onNuevoLimite(limite);
    //limpiarlo
    setInputValor('');
  }

  return (
    <form onSubmit={onSubmit} className="formulario">
      <input
        type="text"
        placeholder="Nombre del Gif"  
        value={inputValor} 
        onChange={inputCambio} 
        className="inputs input-entrada"
      />
       <input
          type="number"
          value={limite}
          onChange={limiteCambio}
          className="inputs input-limite"
          max={10}
        />
        <button className="boton">Enviar</button>
    </form>
  )
}
