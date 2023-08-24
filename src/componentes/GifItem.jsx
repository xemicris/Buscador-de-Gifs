import PropTypes from 'prop-types'

//Componente que muestra las tarjetas
export const GifItem = ({titulo, urlImagen, id}) => {

  return (
    <div className="carta">
        <img className="imagen" src={urlImagen} alt={titulo} />
        <p className="titulo-categoria">{titulo}</p>
    </div>
  )
}

GifItem.propTypes={
  titulo: PropTypes.string.isRequired,
  urlImagen: PropTypes.string.isRequired
}
