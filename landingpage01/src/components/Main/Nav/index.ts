import styled from "styled-components";
import { float } from "../../../styles/hover";

export const Nav = styled.div`
    &.nav {
        transition: color 0.3s;

        .nav-list {
            display: flex;
            list-style: none;
            gap: 105px;
            font-family: 'Encode Sans SC', sans-serif;
            font-weight: 700;
            margin-right: -15px;
        }

        .hamburger-icon {
            color: white;
            display: none;
            transform: scale(2);
            cursor: pointer;
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
        .hamburger-icon {
            color: black;
        }

        li {
            a {
                color: black;
            }
        }
    }

    // Responsive

    @media (max-width: 1400px) {
        li {
            a {
                font-size: 15px;
            }
        }
    }

    @media (max-width: 1200px) {
        &.nav {
            .nav-list {
                gap: 80px;
            }
        }
    }

    @media (max-width: 1000px) {
        &.nav {
            .nav-list {
                gap: 50px;
            }
        }
    }

    @media (max-width: 768px) {
        &.nav {
            .nav-list {
                display: none;
            }
        }
    }
`