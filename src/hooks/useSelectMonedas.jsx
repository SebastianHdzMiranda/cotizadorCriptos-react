import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
    color: #fff;
    display: block;
    font-size: 2.4rem;
    font-weight: 700;
`;
const Select = styled.select`
    width: 100%;
    font-size: 1.8rem;
    padding: 1.4rem;
    border-radius: 0.5rem;
    text-align: center;
    margin-block: 2rem;
`;

function useSelectMonedas(label, opciones) {

    const [state, setState] = useState('');

    // Returna un componente de React '()'
    const SelectMonedas = () => (
        <div>
            <Label>{label}</Label>

            <Select 
                value={state} 
                onChange={ e => setState(e.target.value) }
            >
                <option value="" disabled>--Seleccione--</option>
                
                {opciones.map( opcion => 
                    <option value={opcion.id} key={opcion.id}>{opcion.nombre}</option>    
                )}
            </Select>
        </div>
    );    

    return [ SelectMonedas, state ];
}

export default useSelectMonedas;    