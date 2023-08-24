import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//Componente que crea la estructura de cada categoría
export const GifGrid = ({categoria, limite}) => {

  const {imagenes, estaCargando} = useFetchGifs(categoria, limite); 

  return (
    <>
        <p className="categoria">{categoria}</p>
        {
          estaCargando ? (<p className="cargando">Cargando...</p>) : null
        }
        <div className="carta-grid">
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
