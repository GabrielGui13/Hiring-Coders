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

    // Responsive

    @media (max-width: 1600px) {
        width: 450px;
        height: 400px;
    }

    @media (max-width: 1400px) {
        width: 400px;
        height: 350px;

        h3 {
            font-size: 15px;
        }

        p {
            font-size: 12px;
            margin-bottom: 13px;
        }

        fieldset {
            padding: 10px;
        }

        input {
            font-size: 13px;
        }

        button {
            padding: 8px 18px;
        }
    }

    @media (max-width: 1200px) {
        padding: 30px 30px 0 30px;
        width: 380px;
        height: 330px;
    }

    @media (max-width: 1000px) {
        h3 {
            font-size: 13px;
        }

        p {
            font-size: 10px;
            margin-bottom: 13px;
        }

        fieldset {
            padding: 7px;
        }

        input {
            font-size: 11px;
        }

        button {
            padding: 7px 17px;
            font-size: 10px;
            margin-top: 20px;
        }
    }

    @media (max-width: 870px) {
        padding: 20px 20px 0 20px;
        width: 320px;
        height: 270px;

        h3 {
            font-size: 12px;
        }

        p {
            font-size: 9px;
            margin-bottom: 13px;
        }

        legend {
            font-size: 13px;
        }

        fieldset {
            padding: 4px;
        }

        button {
            margin-top: 12px;
        }
    }

    @media (max-width: 768px) {
        padding: 30px 30px 0 30px;
        width: 380px;
        height: 330px;

        h3 {
            font-size: 15px;
        }

        p {
            font-size: 12px;
            margin-bottom: 13px;
        }

        fieldset {
            padding: 10px;
        }

        input {
            font-size: 13px;
        }

        button {
            padding: 8px 18px;
        }
    }

    @media (max-width: 481px) { 
        padding: 20px 20px 0 20px;
        width: 350px;
        height: 300px;
    }

    @media (max-width: 420px) {
        padding: 25px 25px 0 25px;
        width: 300px;
        height: 290px;

        h3 {
            font-size: 13px;
        }

        p {
            font-size: 10px;
            margin-bottom: 13px;
        }

        fieldset {
            padding: 6px;
        }

        input {
            font-size: 12px;
        }
    }

    @media (max-width: 370px) {
        padding: 21px 21px 0 21px;
        height: 270px;
    }
`

