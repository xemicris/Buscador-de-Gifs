import {useState} from 'react';
import { AnadirCat, GifGrid } from './componentes';


//Componente padre
export const GifApp = () => {

  const [categorias, setCategorias] = useState(['']);
  const [limite, setLimite] = useState([5]);

  if(categorias[0] == "") setCategorias(['welcome']);
  
  const anadirCategoria = (nuevaCategoria) =>{
    if(!categorias.some(categoria => categoria.toLowerCase() === nuevaCategoria.toLowerCase())) setCategorias([nuevaCategoria,...categorias]);
  }

  const cambiarLimite = (valor) => {
    setLimite(valor);
  };


  return (
    <>
      {/* Titulo  */}
      <h1 className='titulo'>Buscador de Gifs</h1>

      {/* Input */}
      <AnadirCat
        //Propiedad
        onNuevaCategoria={(valor) => anadirCategoria(valor)}
        onNuevoLimite={(valor => cambiarLimite(valor))}
      />

      {/* Listado de gifs */}
        {categorias.map(categoria => 
          (
            <GifGrid 
              key={categoria}  
              categoria={categoria}
              limite={limite}
            />
          )
        )}

        {/* Gif item */}
    </>
  )
}
