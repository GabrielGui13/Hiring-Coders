import styled from "styled-components";

export const Content = styled.div`
    width: 100vw;
    min-height: 100vh; 

    .logoImg {
        transition: 0.3s ease;
        &:hover {
            transform: scale(1.05);
        }
    }

    .buttons {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        button {
            padding: 10px;
            font-size: 15px;
            outline: none;
            background-color: #f23568;
            color: white;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            transition: 0.2s background;
            
            &:hover {
                background-color: #c21342;
                box-shadow: 0px 0px 10px #f23568;
            }

            &:active {
                background-color: #800627;
            }
        }
    }
`