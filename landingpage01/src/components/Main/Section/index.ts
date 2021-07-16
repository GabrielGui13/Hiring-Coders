import styled, { keyframes } from 'styled-components'
import milky from '../../../assets/milkyway-blur.png'

const flutuante = keyframes`
    0% {
        padding-bottom: 30px;
    }
    100% {
        padding-bottom: 40px;
    }
`

export const Section = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    width: 100%;
    height: 700px;
    background-image: url(${milky});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    

    .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 100px 150px 0 150px;
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
        padding-bottom: 30px;
        transform: translateY(0);

        animation: ${flutuante} 0.5s ease-out infinite alternate;

        p {
            text-align: center;
            color: white;
            font-family: 'Roboto', sans-serif;
        }

        .arrowIcon {
            margin-top: 5px;
            color: white;
        }
    }

    @media (max-width: 800px) {
        .content {
            flex-direction: column;
        }
    }
`

