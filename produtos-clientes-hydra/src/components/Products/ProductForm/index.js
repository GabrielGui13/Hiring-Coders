import styled from "styled-components";

export const ProductForm = styled.form`
    padding: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div {
        display: flex;
        flex-direction: column;
        height: 70px;
        width: 302px;

        label {
            font-size: 14px;
        }

        p {
            margin-top: 5px;
            color: red;
            font-size: 11px;
            display: inline-block;
        }
    }

    input {
        padding: 5px;
        resize: none;

        &:focus {
            outline: none;
        }
    }

    textarea {
        height: 50px;
        resize: none;
        overflow-y: scroll;
        font-size: 13px;
        padding: 3px;
    }

    button {
        grid-area: button;
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

    h2 { grid-area: title; text-align: center; }

/*   
    .name-field { grid-area: nome; width: 928px; }
    .email-field { grid-area: email; width: 615px; }
    .cellphone-field { grid-area: cellphone; }
    .country-field { grid-area: country; }
    .cep-field { grid-area: cep; }
    .state-field { grid-area: state; }
    .city-field { grid-area: city; }
    .neigh-field { grid-area: neigh; }
    .street-field { grid-area: street; } */

`