import React, { FormEvent, useState } from 'react'
import { Header } from '../../components/Main/Header'
import { Nav } from '../../components/Main/Nav'
import { Section } from '../../components/Main/Section'
import { Form } from '../../components/Main/Form'

import { sendMail } from '../../services/sendMail'

export function Main() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')

    const handleSendMail = async (e: FormEvent) => {
        e.preventDefault();

        const disabledValue = await sendMail(userName, email);
        console.log(disabledValue);
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
                    <Form method="post" onSubmit={handleSendMail}>
                        <h3>INSIRA SEUS DADOS</h3>
                        <p>Para receber mais informações sobre como você pode desfrutar da Hydra.</p>
                        <fieldset>
                            <legend>Nome e sobrenome</legend>
                            <input type="text" id="nome" className="name" value={userName} onChange={e => setUserName(e.target.value)} required />
                        </fieldset>
                        <fieldset>
                            <legend>E-mail</legend>
                            <input type="text" id="email" className="email" value={email} onChange={e => setEmail(e.target.value)} required />
                        </fieldset>
                        <button type="submit"> ENVIAR </button>
                    </Form>
                </div>
                
            </Section>
            <p style={{height: '1000px'}}>

            </p>
        </>
    )
}