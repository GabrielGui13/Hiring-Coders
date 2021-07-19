import styled, { css } from 'styled-components'

export const Responsive = css`
    @media (max-width: 1200px) {
        .icons {
            margin-top: 25px;
        }

        p:nth-of-type(2) {
            margin-top: 40px;
        }
    }

    @media (max-width: 1000px) {
        .icons {
            margin-top: 42px;
        }

        p:nth-of-type(2) {
            margin-top: 30px;
        }

        p {
            font-size: 14px;
        }
    }

    @media (max-width: 600px) {
        transform: scale(0.9) translateY(10px);
    }

    @media (max-width: 480px) {
        transform: translateY(30px);

        .icons {
            margin-top: 42px;
            transform: scale(0.9);
        }

        p {
            text-align: center;
            font-size: 12px;
        }
    }
    
    @media (max-width: 430px) {
        transform: translateY(30px);

        p {
            font-size: 11px;
        }
    }

    @media (max-width: 400px) {
        padding: 0 10px;
    }
`