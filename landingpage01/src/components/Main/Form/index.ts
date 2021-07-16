import styled, { keyframes } from 'styled-components'
import { growShadow } from '../../../styles/hover'

export const Form = styled.form`
    width: 500px;
    height: 450px;
    padding: 40px 40px 0 40px;
    background-color: #fff2;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 40px black;

    p {
        font-size: 13px;
        margin-top: 5px;
        margin-bottom: 20px;
        text-align: center;
    }

    fieldset {
        width: 100%;
        padding: 15px;
        margin-top: 5px;
        border: 2px solid #fff5;
        transition: 0.5s;

        &:hover:enabled, &:active:enabled {
            border: 2px solid white;
        }
    }

    .error {
        display: none;
        position: relative;
        top: 30px;

        &::after {
            content: 'Email invalido';
            color: red;
        }
    }

    legend {
        color: #fff;
        font-size: 12px;
        padding: 0 10px;
    }

    input {
        outline: none;
        width: 100%;
        background-color: transparent;
        color: white;
        border: none;
        border-bottom: 1px solid #fff3;
        font-size: 18px;
        padding: 2px;
        transition: 0.5s;
    }

    button {
        align-self: center;
        margin: auto;
        border: none;
        padding: 12px 22px;
        color: white;
        font-family: "Roboto", sans-serif;
        transition: 2s;
        outline: none;
    } 

    .unsent {
        background: linear-gradient(to bottom right, #ff0040, #d24dff, #6666ff);
        cursor: pointer;

        ${growShadow}
    }
`

