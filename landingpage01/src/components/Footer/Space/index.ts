import styled, { keyframes } from 'styled-components'
import pinksky from '../../../assets/pink-sky.jpg'
import sky1 from '../../../assets/skybackground1.jpg'

const rotate = keyframes`
    from {
        transform: rotate(0deg) scale(0.4);
    }
    to {
        transform: rotate(-360deg) scale(0.4);
    }
`


export const Space = styled.div`
    background-image: url(${sky1});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    .imgWrapper {
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img:nth-of-type(1) { 
            transform: scale(1.2);
            width: 100%;
        }

        img:nth-of-type(2) {
            position: absolute;
            transform: scale(0.4);
            animation: ${rotate} 5s linear infinite;
            transition: 0.3s ease-in;
        }
    }

    @media (max-width: 1400px) {
        .imgWrapper {
            height: 420px;
            transform: scale(0.9);
        }
    }

    @media (max-width: 1200px) {
        .imgWrapper {
            height: 350px;
            transform: scale(0.85);

            img:nth-of-type(1) { 
                transform: scale(1);
            }
        }
    }

    @media (max-width: 1000px) {
        .imgWrapper {
            height: 240px;
            transform: scale(0.7);

            img:nth-of-type(1) { 
                transform: scale(0.9);
            }
        }
    }

    @media (max-width: 880px) {
        .imgWrapper {
            transform: scale(0.7);
        }
    }

    @media (max-width: 768px) {
        .imgWrapper {
            img:nth-of-type(1) { 
                display: none;
            }
        }
    }

    @media (max-width: 480px) {
        height: 470px;
    }
    
`