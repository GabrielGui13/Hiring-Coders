import styled, { keyframes } from 'styled-components'
import milky from '../../../assets/milkyway2.png'
import { Responsive } from './responsive'

const flutuante = keyframes`
    0% {
        padding-bottom: 100px;

        @media (max-width: 481px) { padding-bottom: 30px; }
    }
    100% {
        padding-bottom: 110px;

        @media (max-width: 481px) { padding-bottom: 40px; }
    }
`

export const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    width: 100%;
    background-image: url(${milky});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    

    .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 200px 150px 0 150px;
        font-family: 'Roboto', sans-serif;

        h1 {
            margin-top: 45px;
            width: 650px;
            font-size: 4.75rem;
        }

        h1 + p {
            margin-top: 40px;
            font-size: 20px;
        }
    }

    .saibaMais {
        align-self: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        height: 100%;
        bottom: 10px;
        transform: translateY(0);

        animation: ${flutuante} 0.5s ease-out infinite alternate;

        p, a {
            text-decoration: none;
            text-align: center;
            color: white;
            font-family: 'Roboto', sans-serif;
        }

        .arrowIcon {
            margin-top: 5px;
            color: white;
        }
    }

    /* Toast configuration */
    .Toastify__toast {
        font-family: 'Roboto', sans-serif;
    }

    .Toastify__toast-body {
        padding: 0;
        padding-left: 5px;

        svg {
            align-self: center;
            display: inline-block;
            padding: 0;
            transform: scale(1.2) translateY(2px);
            margin-right: 8px;
        }

        span {
            transform: translateY(-1px);
            margin: 0;
            display: inline-block;
            align-self: start;
            font-size: 13.3px;
        }
    }

    ${Responsive}
`

