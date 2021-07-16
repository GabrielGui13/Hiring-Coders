import styled from "styled-components";
import { float } from "../../../styles/hover";

export const Nav = styled.div`
    &.nav {
        transition: color 0.3s;
        ul {
            display: flex;
            list-style: none;
            gap: 105px;
            font-family: 'Encode Sans SC', sans-serif;
            font-weight: 700;
            margin-right: -15px;
        }

        li {
            padding: 15px;

            a {
                color: white;
                text-decoration: none;
            }

            & {
                display: inline-block;
                transition: 0.5s ease;
                cursor: pointer;
                ${float}
            }
        }
    }
    &.activeN {
        li {
            a {
                color: black;
            }
        }
    }
`