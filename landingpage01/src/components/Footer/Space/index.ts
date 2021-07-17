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
        }

        img:nth-of-type(2) {
            position: absolute;
            transform: scale(0.4);
            animation: ${rotate} 5s linear infinite;
            transition: 0.3s ease-in;
        }
    }
    
`