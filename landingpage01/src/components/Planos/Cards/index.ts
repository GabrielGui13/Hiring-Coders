import styled from 'styled-components'
import { Responsive } from './responsive'

export const Cards = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
    padding: 0 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    font-family: 'Roboto', sans-serif;
    
    .card {
        position: relative;
        max-width: 300px;
        height: 215px;
        background: #fff;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        transition: 0.3s ease-in-out;

        & .imgBox {
            position: relative;
            width: 100%;
            height: 200px;
            top: -70px;
            left: 0;
            z-index: 1;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

            > img {
                max-width: 100%;
                border-radius: 4px;
                height: 200px;
                width: 100%;
            }
        }

        .content {
            position: relative;
            margin-top: -140px;
            padding: 10px 15px;
            text-align: center;
            color: #111;
            visibility: hidden;
            opacity: 0;
            transition: 0.1s ease-in-out;

            p {
                text-align: justify;
                text-justify: inter-word;
            }
        }

        span {
            position: relative;
            bottom: 80px;
            left: calc(50% + 14px);
            transition: 0.3s ease-in-out;
            transform: scale(1.2);
        }

        &:hover, &:active, &:focus {
            height: 390px;
        }

        &:hover .content, &:active .content, &:focus .content {
            visibility: visible;
            opacity: 1;
            margin-top: -60px;
            transition-delay: 0.3s;
        }

        &:hover span, &:active span, &:focus span {
            bottom: -10px;
            transform: scale(1);
            left: calc(50% - 10px);
        }
    }

    ${Responsive}
`