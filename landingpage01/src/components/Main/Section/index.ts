import styled from 'styled-components'
import milky from '../../../assets/milkyway-blur.png'

export const Section = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    width: 100%;
    height: 700px;
    background-image: url(${milky});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 120px 150px 0 150px;
        font-family: 'Roboto', sans-serif;

        h1 {
            margin-top: 60px;
            width: 650px;
            font-size: 4.75rem;
        }
    }
    
`