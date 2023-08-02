import {useState} from 'react';
import { AnadirCat, GifGrid } from './componentes';


//Componente padre
export const GifApp = () => {

  const [categorias, setCategorias] = useState(['']);
  
  const anadirCategoria = (nuevaCategoria) =>{
    if(!categorias.some(categoria => categoria.toLowerCase() === nuevaCategoria.toLowerCase())) setCategorias([nuevaCategoria,...categorias]);
  }


  return (
    <>
      {/* Titulo  */}
      <h1>GifApp</h1>

      {/* Input */}
      <AnadirCat
        //Propiedad
        onNuevaCategoria={(valor) => anadirCategoria(valor)}
      />

      {/* Listado de gifs */}
        {categorias.map(categoria => 
          (
            <GifGrid 
              key={categoria}  
              categoria={categoria}
            />
          )
        )}

        {/* Gif item */}
    </>
  )
}
