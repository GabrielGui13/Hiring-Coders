import styled, { keyframes } from 'styled-components'
import { growShadow } from '../../../styles/hover'
import { Responsive } from './responsive'

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

        &:hover, &:active {
            border: 2px solid white;
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

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
        border: 0px solid green;
        -webkit-text-fill-color: white; 
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    input:-moz-autofill,
    input:-moz-autofill:hover, 
    input:-moz-autofill:focus {
        border: 0px solid green;
        -webkit-text-fill-color: white; 
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
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

    ${Responsive}
`

