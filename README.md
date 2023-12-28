# Styled Components
    instalar:
        npm @emotion/react @emotion/styled

    Ventajas de styled components:
        Al eliminar un componente, se elimina con su codigo css, a diferencia de una hoja de estilos convencional

    sintaxis:

        const Heading = styled.h1 `
            font-size: 2rem;
        `;

        return (

            <Heading> Nuestros Productos </Heading>
        )