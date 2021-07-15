import React, { FormEvent, useState } from 'react'
import axios from 'axios';
import { Header } from '../../components/Main/Header'
import { Nav } from '../../components/Main/Nav'
import { Section } from '../../components/Main/Section'
import { Form } from '../../components/Main/Form'

import { BiCheckCircle } from 'react-icons/bi'

import blackHole from '../../assets/black-hole.png'

export function Main() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [sentMail, setSentMail] = useState(false)
    const [Error, setError] = useState(false)

    const handleSendMail = async (e: FormEvent) => {
        e.preventDefault();
        
        if (userName.trim() === '' && email.trim() === '') {
            return
        }

        if (!email.includes('@') && !email.includes('.')) {
            return
        }
        

        await axios.post('http://localhost:3030/sendmail', {
            userName: userName,
            email: email
        })
        .then( async response => {
            let showInfo = await response.data

            console.log(showInfo)

            if (showInfo.errorMessage) {
                alert('Sentimos muito! Algo de errado aconteceu.')
            }
            else if (showInfo.messageId) {
                setSentMail(true)
                setUserName('')
                setEmail('')
                alert('E-mail enviado com sucesso!')
            }
            else {
                console.log(showInfo)
            }
        })
        .catch(err => console.log({...err}))
    }

    return (
        <>
            <Header>
                <div className="logo">
                    <img src={blackHole} alt="Logo hydra"/>
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
                        <fieldset disabled={sentMail}>
                            <legend>Nome e sobrenome</legend>
                            <input type="text" id="nome" className="name" value={userName} onChange={e => setUserName(e.target.value)} required disabled={sentMail} />
                        </fieldset>
                        <fieldset disabled={sentMail}>
                            <legend>E-mail</legend>
                            <input type="text" id="email" className="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={sentMail} />
                        </fieldset>
                        <p className="error"></p>
                        {!sentMail ? (
                            <button type="submit" className="unsent">ENVIAR</button>
                        ) : (
                            <button type="submit" className="sent"> <BiCheckCircle id="checkIcon" color="white" size="2em"/> </button>)
                        }
                    </Form>
                </div>
            </Section>
            <p style={{height: '1000px'}}></p>
            <p style={{height: '1000px'}}></p>
        </>
    )
}