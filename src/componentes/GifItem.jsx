
//Componente que muestra las tarjetas
export const GifItem = ({titulo, urlImagen}) => {

  return (
    <div className="card">
        <img src={urlImagen} alt={titulo} />
        <p>{titulo}</p>
    </div>
  )
}
