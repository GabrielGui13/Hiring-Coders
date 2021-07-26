import styled from "styled-components";

export const ProductTable = styled.table`
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
            width: 20%;
        }
        &:nth-of-type(3) {
            width: 20%;
        }
        &:nth-of-type(4) {
            width: 10%;
        }
        &:nth-of-type(5) {
            width: 44%;
        }
        &:nth-of-type(6) {
            width: 4%;
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
            font-size: 9px;
        }
    }
`