import { GifItem } from "../../src/componentes/GifItem"
import {render, screen} from '@testing-library/react';


describe('Pruebas en <GifItem. />', () => { 
    
    const tit = 'Saint-Seiya';
    const url = 'https://localhost/saintseiya.jpg';

    test('debe hacer match con el snapshot', () => { 

        const {container} = render(<GifItem titulo={tit} urlImagen={url} />);

        expect(container).toMatchSnapshot();
     })

     test('Debe mostrar la imagen con el URL y el ALT indicados', () => { 
        
         render(<GifItem titulo={tit} urlImagen={url} />);
        // expect(screen.getByRole('img').src).toBe( url );
        // expect(screen.getByRole('img').alt).toBe(tit);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(tit);

      })

      test('debe de mostrar el título en el componente', () => { 
        
        render(<GifItem titulo={tit} urlImagen={url} />);
        expect(screen.getByText(tit)).toBeTruthy();
       })
 })