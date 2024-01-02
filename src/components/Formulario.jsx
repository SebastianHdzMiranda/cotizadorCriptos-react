import styled from '@emotion/styled';
import React from 'react';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 1rem;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2rem;
    border-radius: .5rem;
    transition: background-color .3s ease;
    &:hover {
        cursor: pointer;
        background-color: #7A7DFE;
    }
`;

function Formulario() {

    /* Custom Hooks 
        - Como 'useSelectMonedas' retorna un arreglo, practicamente se esta destructurando 'SelectMonedas' de ese arreglo, y podemos ponerle el nombre que queramos a esa variable.

        - Puedes mandar a llamar 'SelectMonedas' como un componente, <SelectMonedas />

        - Puedes pasar un valor inicial a 'useSelectMonedas' como si fuera un hook useState, etc, y en la funcion recibirlo en los parametros
    */
    const [ SelectMonedas, state ]  = useSelectMonedas('Elije tu moneda', monedas); 

    return (
        <form>
            <SelectMonedas/>
            {state}
            <InputSubmit type="submit" value='Cotizar'/>
        </form>
    )
}

export default Formulario;