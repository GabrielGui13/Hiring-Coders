import styled, { css } from 'styled-components'

export const float = css`
    & {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    &:hover, &:focus, &:active {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
`

export const growShadow = css`
    & {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow, transform;
        transition-property: box-shadow, transform;
    }
    &:hover, &:focus, &:active {
        box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
`