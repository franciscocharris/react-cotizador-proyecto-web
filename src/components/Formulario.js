import React, { useState } from 'react'
import styled from '@emotion/styled';
import { useForm } from '../hooks/useForm';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`,
    Label = styled.label`
        flex: 0 0 100px;
    `,
    Select = styled.select`
        display: block;
        width: 100%;
        padding: 1rem;
        border: 1px solid #e1e1e1;
        -webkit-appearance: none;
    `,
    InputRadio = styled.input`
        margin: 0 1rem;
    `,
    Boton = styled.button`
        background-color: #00838f;
        font-size: 16px;
        width: 100%;
        padding: 1rem;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        transition: background-color .3s ease;
        margin-top: 1rem;

        &:hover{
            background-color: #26c6da;
            cursor: pointer;
        }
    `,
    Error = styled.div`
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        position: relative;
        padding: 0.75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: 0.25rem;
        text-align: center;
    `;

export const Formulario = () => {

    const [error, setError] = useState(false);

    const [values, handleInputChange, reset] = useForm({
        marca: '',
        year: '',
        plan: '',
    });

    const { marca, year, plan } = values;

    // cuando e usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        } else {
            setError(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error && <Error>Todos los campos son obligatorios</Error>}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name='marca'
                    value={marca}
                    onChange={handleInputChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={handleInputChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basico'
                    checked={plan === 'basico'}
                    onChange={handleInputChange}
                /> Basico

                <InputRadio
                    type='radio'
                    name='plan'
                    value='completo'
                    checked={plan === 'completo'}
                    onChange={handleInputChange}
                /> Completo
            </Campo>

            <Boton type='submit'>Cotizar</Boton>
        </form>
    )
}
