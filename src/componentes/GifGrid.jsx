import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//Componente que crea la estructura de cada categoría
export const GifGrid = ({categoria}) => {

  const {imagenes, estaCargando} = useFetchGifs(categoria); 

  return (
    <>
        <h3>{categoria}</h3>
        {
          estaCargando ? (<h2>Cargando...</h2>) : null
        }
        <div className="card-grid">
          {/* En el paréntesis tras la flecha va el return implícito */}
          {imagenes.map(imagen =>(
              <GifItem 
                key={imagen.id}
                {...imagen}
              />
            )
          )}
        </div>

    </>
  )
}
