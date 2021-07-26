import React from "react";
import { Header } from "../../components/Navigator/Header";
import { Content } from "../../components/Navigator/Content";
import hydra from '../../assets/black-hole.png'
import { Clients } from '../Clients'
import { Products } from '../Products'
import { useHistory, Switch, Route } from 'react-router-dom'

const Blank = () => {
    return (
        <>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <p>Selecione uma página</p>
            </div>
        </>
    )
}

export function Navigator() {
    const history = useHistory();

    function handleProductPage() {
        history.push('/products')
    }
    function handleClientPage() {
        history.push('/clients')
    }
    function handleBlankPage() {
        history.push('/')
    }

    return (
        <Content>
            <Header>
                <div className="logoImg" onClick={handleBlankPage} style={{cursor: 'pointer'}}>
                    <img src={hydra} alt="Logo da Hydra" />
                </div>
            </Header>
            <div className="buttons">
                <button id="products" onClick={handleProductPage}>Produtos</button>
                <button id="clients" onClick={handleClientPage}>Clientes</button>
            </div>
            <Switch>
                <Route path='/' exact component={Blank}></Route>
                <Route path='/products' component={Products}></Route>
                <Route path='/clients' component={Clients}></Route>
            </Switch>
        </Content>
    )
}