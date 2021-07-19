import styled, { css } from 'styled-components'

export const Responsive = css`
    @media (max-width: 1670px) {
        gap: 0px;
        margin-bottom: 50px;

        .card {
            transform: scale(0.9);
        }
    }

    @media (max-width: 1500px) {
        height: 550px;

        .card {
            transform: scale(0.8);
            margin: 0 -15px 0 -15px;
        }
    }
    
    @media (max-width: 1400px) {
        padding: 0 100px;
    }

    @media (max-width: 1280px) {
        height: 500px;
        margin-bottom: 30px;

        .card {
            transform: scale(0.7);
            margin: 0 -35px 0 -35px;
        }
    }

    @media (max-width: 1200px) {
        padding: 0 80px;
    }

    @media (max-width: 1080px) {
        margin-bottom: 40px;
        margin-top: 20px;
        align-content: center;
        height: 600px;
    }

    @media (max-width: 1000px) {
        margin-top: 60px;
        padding: 0 60px;
        margin-bottom: 50px;
    }

    @media (max-width: 578px) {
        height: 1400px;
        margin-top: -40px;

        .card {
            transform: scale(0.9);
            margin-top: 60px;
        }
    }

    @media (max-width: 460px) {
        margin-top: -80px;

        .card {
            transform: scale(0.85);
        }
    }

    @media (max-width: 380px) {
        margin-top: -130px;
        margin-bottom: -40px;
        padding: 0;

        .card {
            transform: scale(0.75);
            margin-top: 30px;
        }
    }

`