import styled from 'styled-components'

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

    // Responsive

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