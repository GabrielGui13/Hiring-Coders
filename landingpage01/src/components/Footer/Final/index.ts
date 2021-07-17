import styled from "styled-components"
import { float } from '../../../styles/hover'


export const Final = styled.footer`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    
    & p {
        color: #fff;
    }

    & p:nth-of-type(1) {
        word-spacing: 20px;
        margin-top: 30px;

        > a {
            color: inherit;
            text-decoration: none;
            cursor: pointer;
        }
    }

    p:nth-of-type(2) {
        margin-top: 70px;
    }


    .icons {
        display: flex;
        gap: 20px;

        > a {
            text-decoration: none;
            background-color: white;
            border-radius: 50%;
            padding: 5px;
            height: 40px;
            width: 40px;

            ${float}
        }
    }    

    svg {
        margin: 0;
        padding: 0;
        display: inline;
        color: black;
        transform: scale(1.7) translateY(4px) translateX(4px);
    }
`