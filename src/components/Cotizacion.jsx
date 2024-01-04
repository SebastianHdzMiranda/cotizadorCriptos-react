import styled from '@emotion/styled';
import React from 'react'

const Contenedor = styled.div`
    margin-top: 5rem;
    @media (min-width: 768px) {
        display: flex;
        gap: 4rem;
        align-items: center;
        
    }
`;
const Imagen = styled.img`
    display: block;
    width: 20rem;
    margin: 0 auto;
`;

const Precio = styled.h2`
    font-size: 4rem;
    font-weight: 900;
`;

const ParrafoInfo = styled.p`
    font-size: 2rem;
`

function Cotizacion({cotizacion}) {

    const  {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} = cotizacion;
    console.log(cotizacion)

    return (
        <Contenedor>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="imagen cripto" 
            />
            <div>
                <Precio>{PRICE}</Precio>
                <ParrafoInfo>Precio más alto del día: {HIGHDAY}</ParrafoInfo>
                <ParrafoInfo>Precio más bajo del día: {LOWDAY}</ParrafoInfo>
                <ParrafoInfo>Variación últimas 24 horas: {CHANGEPCT24HOUR}%</ParrafoInfo>
                <ParrafoInfo>Última Actualización: {LASTUPDATE}</ParrafoInfo>
            </div>
        </Contenedor>
    )
}

export default Cotizacion;