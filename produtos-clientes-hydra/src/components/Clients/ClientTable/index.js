import styled from "styled-components";

export const ClientTable = styled.table`
    border: 2px solid black;
    width: 90vw;
    margin-top: 30px;
    border-collapse: collapse;

    tr {
        &:nth-of-type(odd) {
            background-color: #ddd
        }
    }

    th { 
        border: 2px solid black;
        background-color: #f23568;
        color: white;
    }

    td {
        overflow-x: hidden;

        &:nth-of-type(1) {
            width: 2%;
        }
        &:nth-of-type(2) {
            width: 18%;
        }
        &:nth-of-type(3) {
            width: 18%;
        }
        &:nth-of-type(4) {
            width: 11%;
        }
        &:nth-of-type(5) {
            width: 5%;
        }
        &:nth-of-type(6) {
            width: 8%;
        }
        &:nth-of-type(7) {
            width: 5%;
        }
        &:nth-of-type(8) {
            width: 8%;
        }
        &:nth-of-type(9) {
            width: 8%;
        }
        &:nth-of-type(10) {
            width: 17%;
        }
    }

    @media (max-width: 1100px) {
        tr {
            font-size: 12px;
        }
    }
    @media (max-width: 768px) {
        width: 100vw;
        tr {
            font-size: 11px;
        }
    }
    @media (max-width: 576px) {
        tr {
            font-size: 10px;
        }
    }
    @media (max-width: 480px) {
        tr {
            font-size: 8px;
        }
    }
    @media (max-width: 420px) {
        tr {
            font-size: 7px;
        }
    }
`