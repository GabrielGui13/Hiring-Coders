import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    width: 100%;
    border: 1px solid black;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 150px;
    background-color: white;
    margin-top: -100px;
    z-index: 100;

    .logo {
        height: 60px;
        display: flex;
        align-items: center;
        cursor: pointer;
  
        img {
            height: 100%;
            padding: 5px;
        }
  
        .line {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80%;
            width: 2px;
            background: linear-gradient(to bottom, #ff0040, #d24dff, #6666ff);
            margin-left: 20px;
            
            h3 {
                font-family: 'Encode Sans SC', sans-serif;
                font-size: 2em;
                font-weight: 500;
                margin-left: 160px;
                background: linear-gradient(to bottom right, #ff0040, #d24dff, #6666ff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
`