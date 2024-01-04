import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
import Error from './Error';

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

function Formulario({setConsulta}) {

    const [criptomonedas, setCriptomonedas] = useState([]);
    const [alerta, setAlerta] = useState(false);

    /* Custom Hooks 
        - Como 'useSelectMonedas' retorna un arreglo, practicamente se esta destructurando 'SelectMonedas' de ese arreglo, y podemos ponerle el nombre que queramos a esa variable.

        - Puedes mandar a llamar 'SelectMonedas' como un componente, <SelectMonedas />

        - Puedes pasar un valor inicial a 'useSelectMonedas' como si fuera un hook useState, etc, y en la funcion recibirlo en los parametros

        - 'Moneda' Es el State que se encruentra en el hook, y almacena el valor del select. Nota: no se mezcla con otro hook, (como el de SelectCriptos), CADA HOOK TIENE SU STATE
    */
    const [ SelectMonedas, moneda ]  = useSelectMonedas('Elije tu Moneda', monedas); 
    const [ SelectCriptos, cripto ]  = useSelectMonedas('Elije tu Criptomoneda', criptomonedas); 

    useEffect(() => {
        const consultaAPI = async() => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            try {
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
        
                const criptomonedas = resultado.Data.map(criptomoneda => {
                    // Extrayendo infomacion de objetos
                    const {CoinInfo: { Name, FullName }} = criptomoneda;
                    // Creando un objeto con la info necesaria
                    const info = {
                        id: Name,
                        nombre: FullName,
                    }
                    return info;
                });
                
                setCriptomonedas(criptomonedas);
                
            } catch (error) {
                console.log(error)
            }
        }
        consultaAPI();
    }, []);
    
    const handleSubmit = e => {
        e.preventDefault();
        
        if ([moneda,cripto].includes('')) {
            setAlerta(true);

            setTimeout(() => {
                setAlerta(false);
            }, 2000);
            return; 
        }
        setAlerta(false);
        setConsulta({moneda, cripto});
    }

    return (
        <>
            {alerta && <Error>Todos los campos son Requeridos</Error>}
            <form onSubmit={handleSubmit}>
                <SelectMonedas/>
                <SelectCriptos />
                <InputSubmit type="submit" value='Cotizar'/>
            </form>
        </>
    )
}

export default Formulario;