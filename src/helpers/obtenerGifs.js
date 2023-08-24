export const obtenerGifs = async(categoria, limite)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=38WeUgIjeU2EApus895vS1ZufWygSh4f&q=${categoria}&limit=${limite}`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    
    const gifs = data.map(img =>(
        {
            id: img.id,
            titulo: img.title,
            urlImagen: img.images.downsized_medium.url
        }
    ))
    return gifs;
}