import styled, { css } from 'styled-components'

export const Responsive = css`
    @media (max-width: 1600px) {
        .content {
            padding-top: 200px;

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
            padding-top: 160px;

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
            padding-top: 190px;

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

            .saibaMais {
                transform: translateY(50px);
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