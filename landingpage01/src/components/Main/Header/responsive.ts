import styled, { css } from 'styled-components'

export const Responsive = css`
    @media (max-width: 1400px) {
        &.header {
            padding-left: 100px;
            padding-right: 100px;
        }
    }

    @media (max-width: 1200px) {
        &.header {
            padding-left: 80px;
            padding-right: 80px;
        }
    }

    @media (max-width: 1000px) {
        &.header {
            padding-left: 60px;
            padding-right: 60px;
        }

        .logo {
            transform: scale(0.9);
        }
    }

    @media (max-width: 768px) {
        &.header {
            justify-content: center;
            padding: 0;
            
            .logo {
                margin-left: -110px;
            }
        }
    }

    @media (max-width: 481px) { 
        &.header {
            height: 80px;
        }

        .logo {
            transform: scale(0.75);
        }
    }
`