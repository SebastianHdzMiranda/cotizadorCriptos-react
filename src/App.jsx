import styled from "@emotion/styled";
import ImagenCripto from './assets/img/imagen-criptos.png'
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";

// STYLED COMPONENTS
const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img `
  max-width: 400px;
  width: 100%;
  margin: 10rem auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-size: 3.4rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 10rem;
  margin-bottom: 5rem;

  &::after {
    content: '';
    width: 10rem;
    height: .6rem;
    background-color: #66A2FE;
    display: block;
    margin: 1rem auto 0 auto;
  }
`;

function App() {

  const [consulta, setConsulta] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (Object.keys(consulta).length > 0) {
      const consultaAPI = async() => {
        // Mostra el spinner
        setSpinner(true);
        // Esconde el componente mientras se muestra el spinner
        setCotizacion({});
        const {cripto, moneda} = consulta;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          // Esconde el spinner
          setSpinner(false);
          setCotizacion(resultado.DISPLAY[cripto][moneda]);
          
        } catch (error) {
          console.log(error);
        }

      }

      consultaAPI();
    }
  }, [consulta])
  

  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto} 
        alt="Imagen critos" 
      />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario setConsulta={setConsulta}/>
        
        {spinner && <Spinner />}
        {Object.keys(cotizacion).length > 0 && <Cotizacion cotizacion={cotizacion}/>}
      </div>
    </Contenedor>
  );
}

export default App;
