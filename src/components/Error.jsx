import styled from '@emotion/styled';
import React from 'react'

const Texto = styled.div`
    background-color: rgb(254, 202, 202);
    color: rgb(220, 38, 38);
    padding: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    border: 1px solid rgb(220, 38, 38);
    border-radius: .5rem;
    margin-bottom: 2rem;
`;

function Error({children}) {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error;