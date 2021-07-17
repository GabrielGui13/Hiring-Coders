import styled from 'styled-components'

export const Author = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    padding: 80px 150px 70px 150px;

    > img {
        position: absolute;
        z-index: -99;
        opacity: 0.05;
        right: -200px;
        top: 1050px;
        transform: scale(1.3) rotate(-8deg);
    }

    h1 {
        text-align: center;
    }

    h3 {
        text-align: center;
        margin-bottom: 40px;
    }

    .content {
        display: grid;
        grid-template-areas: 
            "img description description"
            "img description description"
            "img companies companies"
        ;

        > img {
            grid-area: img;
            height: 600px;
            border: 5px solid transparent;
            -moz-border-image: -moz-linear-gradient(top left, #ff0040 0%, #d24dff 50%, #6666ff 100%);
	        -webkit-border-image: -webkit-linear-gradient(top left, #ff0040 0%, #d24dff 50%, #6666ff 100%);
	        border-image: linear-gradient(to bottom right, #ff0040 0%, #d24dff 50%, #6666ff 100%);
	        border-image-slice: 1;
        }

        .description {
            grid-area: description;
            padding: 10px;
            margin-left: 50px;

            p:nth-of-type(1) {
                margin-bottom: 20px;
            }

            p:not(:nth-of-type(1)) {
                margin-bottom: 10px;
                text-align: justify;
                text-justify: inter-word;
                text-indent: 50px;
            }
        }

        .companies {
            grid-area: companies;
            margin-left: 50px;
            height: 150px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            img { height: 30%; }

            img:nth-of-type(1) {
                height: 50%;
            }
            img:nth-of-type(2) {

            }
            img:nth-of-type(3) {
                height: 25%;
            }
            img:nth-of-type(4) {
                height: 40%;
            }
            img:nth-of-type(5) {
                height: 50%;
            }
            img:nth-of-type(6) {
                height: 50%;
            }
        }
    }
`