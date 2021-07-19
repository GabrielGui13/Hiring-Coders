import styled, { css } from 'styled-components'

export const Responsive = css`
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