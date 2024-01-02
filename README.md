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

# Por que crear tus propios hooks

    - codigo reutilizable en otros lugares de tu app
    - se pueden crear funciones helper, pero la ventaja de los hooks es que puedes incorporar State y mantener el valor de una funcion de forma persistente
    -Tu codigo tendra las ventajas de React 