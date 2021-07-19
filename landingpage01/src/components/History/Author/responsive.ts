import styled, { css } from 'styled-components'

export const Responsive = css`
    @media (max-width: 1640px) {
        .content {
            > img {
                height: 550px;
            }

            .description {
                p {
                    font-size: 14px;
                }
            }
        }
    }

    @media (max-width: 1540px) {
        .content {
            > img {
                height: 500px;
            }

            .description {
                margin-left: 40px;

                p {
                    font-size: 14px;
                }

                p:nth-of-type(4) {
                    margin-bottom: -10px;
                }
            }

            .companies {
                img { 
                    transform: scale(0.8);
                    margin-left: 0;
                }
            }
        }
    }

    @media (max-width: 1460px) {
        .content {
            grid-template-areas: 
                "img description description"
                "img description description"
                "companies companies companies"
            ;

            .description {
                p {
                    font-size: 14px;
                }
            }

            .companies {
                margin-left: 0;
            }
        }
    }

    @media (max-width: 1400px) {
        padding-left: 100px;
        padding-right: 100px;
    }

    @media (max-width: 1200px) {
        padding-left: 80px;
        padding-right: 80px;

        h1 {
            font-size: 25px;
        }

        h3 {
            font-size: 18px;
        }

        .content {
            h2 {
                font-size: 20px;
            } 

            > img {
                height: 420px;
            }

            .description {
                p {
                    font-size: 13px;
                }
            }

            .companies {
                img {
                    transform: scale(1);
                }
            }
        }
    }

    @media (max-width: 1100px) {
        .content {
            .description {
                p {
                    font-size: 12px;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        padding-left: 60px;
        padding-right: 60px;

        .content {
            grid-template-areas: 
                "img img img"
                "description description description"
                "companies companies companies"
            ;

            > img {
                margin: 0 auto;
            }

            .description {
                margin-left: 0;
                h2, p:nth-of-type(1) {
                    text-align: center;
                }

                p:nth-of-type(1) {
                    margin-bottom: 50px;
                }
            }

            .companies {
                flex-wrap: wrap;
                img {
                    transform: scale(0.75);
                }
            }
        }
    }

    @media (max-width: 820px) {
        .content {
            .companies {
                margin-top: 50px;
            }
        }
    }

    @media (max-width: 500px) {
        padding-left: 40px;
        padding-right: 40px;

        .content {
            .description {
                p:not(:nth-of-type(1)) {
                    margin-bottom: 10px;
                    text-align: justify;
                    text-justify: inter-word;
                    text-indent: 50px;
                }
            }
        }
    }

    @media (max-width: 460px) {
        .content {
            > img {
                height: 340px;
            }

            .companies {
                margin-top: 20px;
                transform: scale(0.8);
            }
        }
    }

    @media (max-width: 400px) {
        padding-left: 30px;
        padding-right: 30px;

        .content {
            > img {
                height: 300px;
            }

            .description {
                p {
                    font-size: 11px;
                }
            }
        }
    }


`