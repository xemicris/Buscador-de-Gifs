import { useEffect, useState } from "react";
import {obtenerGifs} from '../helpers/obtenerGifs';

export const useFetchGifs = (categoria) => {

    const [imagenes, establecerImagenes] = useState([]);
    const [estaCargando, establecerEstaCargando] = useState(true);

    const obtenerImagenes = async() =>{
        const nuevasImagenes = await obtenerGifs(categoria);
        establecerImagenes(nuevasImagenes);
        establecerEstaCargando(false);
    }

    useEffect(()=>{
    obtenerImagenes();
    }, []);

    return {
        imagenes: imagenes,
        estaCargando
    }
}
