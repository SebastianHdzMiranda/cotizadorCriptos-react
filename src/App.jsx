import styled from "@emotion/styled";
import ImagenCripto from './assets/img/imagen-criptos.png'
function App() {

  const Contenedor = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 768px) {
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


  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto} 
        alt="Imagen critos" 
      />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
      </div>
    </Contenedor>
  );
}

export default App;
