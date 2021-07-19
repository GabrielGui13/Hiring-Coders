import styled, { css } from 'styled-components'

export const Responsive = css`
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