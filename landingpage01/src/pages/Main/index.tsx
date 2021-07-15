import React, { FormEvent, useState } from 'react'
import { Header } from '../../components/Main/Header'
import { Nav } from '../../components/Main/Nav'
import { Section } from '../../components/Main/Section'
import { Form } from '../../components/Main/Form'

export function Main() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')

    const handleSendMail = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <>
            <Header>
                <div className="logo">
                    <img src="https://image.flaticon.com/icons/png/512/2590/2590288.png" alt="Logo hydra"/>
                    <div className="line"> 
                        <h3>hydra</h3>
                    </div>
                </div>
                <Nav>
                    <ul>
                        <li>HISTÓRIA</li>
                        <li>PLANOS</li>
                        <li>SOBRE</li>
                    </ul>
                </Nav>
            </Header>
            <Section>
                <div className="content">
                    <div className="text">
                        <h1>Seja o próximo a desbravar o espaço.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <Form method="get" onSubmit={handleSendMail}>
                        <input type="text" className="name" value={userName} onChange={e => setUserName(e.target.value)} />
                        <input type="text" className="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form>
                </div>
                
            </Section>
            <p style={{height: '1000px'}}>

            </p>
        </>
    )
}