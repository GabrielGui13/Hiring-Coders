import styled, { keyframes } from 'styled-components'
import milky from '../../../assets/milkyway2.png'

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

    // Responsive

    @media (max-width: 1600px) {
        .content {
            padding-top: 220px;

            h1 {
                margin-top: 35px;
                width: 570px;
                font-size: 4.5rem;
            }
            h1 + p {
                margin-top: 35px;
                font-size: 17px;
                width: 600px;
            }
        }
    }

    @media (max-width: 1400px) {
        
        .content {
            padding-left: 100px;
            padding-right: 100px;
            padding-top: 190px;

            h1 {
                width: 520px;
                font-size: 3.8rem;
            }

            h1 + p {
                font-size: 15px;
                width: 520px;
            }
        }
    }

    @media (max-width: 1200px) {
        .content {
            padding-left: 80px;
            padding-right: 80px;
            padding-top: 230px;

            h1 {
                width: 430px;
                font-size: 3.5rem;
            }

            h1 + p {
                font-size: 13px;
                width: 460px;
            }
        }
    }

    @media (max-width: 1000px) {
        .content {
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 180px;

            h1 {
                width: 370px;
                font-size: 3rem;
            }

            h1 + p {
                margin-top: 25px;
                font-size: 11px;
                width: 380px;
            }
        }
    }

    @media (max-width: 870px) {
        .content {
            h1 {
                width: 340px;
                font-size: 2.75rem;
            }

            h1 + p {
                margin-top: 10px;
                width: 350px;
            }
        }
    }

    @media (max-width: 768px) {
        .content {
            padding-top: 100px;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h1 {
                align-self: center;
                width: 340px;
            }

            h1 + p {
                margin-bottom: 80px;
            }
        }
    }

    @media (max-width: 481px) {
        .content {

            h1 {
                font-size: 2.5rem;
                width: 280px;
            }

            h1 + p {
                margin-bottom: 60px;
                font-size: 10px;
            }
        }

        .saibaMais {
            transform: translateY(60px);
        }
    }

    @media (max-width: 420px) {
        .content {
            padding-top: 80px;

            h1 {
                font-size: 2.1rem;
                width: 300px;
                margin-left: 5px;
            }

            h1 + p {
                margin-bottom: 60px;
                font-size: 11px;
                width: 300px;
                margin-left: 5px;
            }
        }
    }

    @media (max-width: 370px) {
        .content {
            padding-top: 70px;

            h1 {
                font-size: 2rem;
                width: 280px;
                margin-left: 5px;
            }

            h1 + p {
                margin-bottom: 40px;
                font-size: 11px;
                width: 300px;
                margin-left: 5px;
            }
        }

        .saibaMais {
            transform: translateY(30px);
        }
    }
`

