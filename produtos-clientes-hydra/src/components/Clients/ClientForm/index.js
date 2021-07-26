import styled from "styled-components";

export const ClientForm = styled.form`
    padding: 10px;
    border: 1px solid black;
    display: grid;
    grid-template-areas: 
        ". title ."
        "nome nome nome"
        "email email cellphone"
        "country cep state"
        "city neigh street"
        ". button ."
    ;
    gap: 10px;

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

        &:focus {
            outline: none;
        }
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
    .name-field { grid-area: nome; width: 928px; }
    .email-field { grid-area: email; width: 615px; }
    .cellphone-field { grid-area: cellphone; }
    .country-field { grid-area: country; }
    .cep-field { grid-area: cep; }
    .state-field { grid-area: state; }
    .city-field { grid-area: city; }
    .neigh-field { grid-area: neigh; }
    .street-field { grid-area: street; }

    @media (max-width: 1100px) {
        grid-template-areas: 
            ". title ."
            "nome nome nome"
            "email email email"
            "cellphone cellphone cellphone"
            "country country country"
            "cep cep cep"
            "state state state"
            "city city city"
            "neigh neigh neigh"
            "street street street"
            ". button ."
        ;
        .name-field { grid-area: nome; width: 302px; }
        .email-field { grid-area: email; width: 302px; }
    }
`