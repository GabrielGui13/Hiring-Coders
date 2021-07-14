import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem auto;
    background: #000;
    color: #fff;
    padding: .5rem;
    width: 80vw;
`

export const LinkHome = styled(Link)`
    width: 4rem;
    display: block;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    color: #fff;
    padding: .5rem 0;
    text-decoration: none;
`