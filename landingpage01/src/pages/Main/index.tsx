import React, { FormEvent, useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import { invalidInput, errorMail, successMail } from '../../components/Main/Toasts';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

import { Header } from '../../components/Main/Header'
import { Nav } from '../../components/Main/Nav'
import { Section } from '../../components/Main/Section'
import { Form } from '../../components/Main/Form'

import { History } from '../History';
import { Planos } from '../Planos';

import { IoIosArrowDropdownCircle } from 'react-icons/io'

import blackHole from '../../assets/black-hole.png'

export function Main() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [showNavbar, setShowNavbar] = useState(false)

    const handleSendMail = async (e: FormEvent) => {
        e.preventDefault();
        
        if (userName.trim() === '' || email.trim() === '') {
            invalidInput(`Preencha os espaços em branco!`)
            return
        }

        if (!email.includes('@') && !email.includes('.')) {
            invalidInput('Email inválido!')
            return
        }
        

        await axios.post('http://localhost:3030/sendmail', { //http://set.dev.br:3030/sendmail
            userName: userName,
            email: email
        })
        .then( async response => {
            let showInfo = await response.data

            if (showInfo.errorMessage) {
                errorMail('Ocorreu um erro! Tente novamente')
                console.log(showInfo.errorMessage)
            }
            else {
                setUserName('')
                setEmail('')
                successMail()
            }
        })
        .catch(err => {
            errorMail('Ocorreu um erro! Tente novamente')
            console.log(err.message)
        })
    }

    const toTheTop = () => {
        window.scrollTo(0, 0);
    }

    const changeHeader = () => {
        if (window.scrollY >= 80) setShowNavbar(true)
        else setShowNavbar(false)
    }
    window.addEventListener('scroll', changeHeader)

    return (
        <>
            <Header className={`header ${showNavbar ? 'activeH' : ''}`}>
                <div className="logo" onClick={toTheTop}>
                    <img src={blackHole} alt="Logo hydra"/>
                    <div className="line"> 
                        <h3>hydra</h3>
                    </div>
                </div>
                <Nav className={`nav ${showNavbar ? 'activeN' : ''}`}>
                    <ul>
                        <li> <a href="#history">HISTÓRIA</a> </li>
                        <li> <a href="#services">SERVIÇOS</a> </li>
                        <li> <a onClick={toTheTop}>CADASTRE-SE</a> </li>
                    </ul>
                </Nav>
            </Header>
            <Section>
                <div className="content">
                    <div className="text">
                        <h1>Seja o próximo a desbravar o espaço.</h1>
                        <p>Garanta sua vaga e contribua na área mais promissora do mundo, o universo.</p>
                    </div>
                    <Form method="post" onSubmit={handleSendMail}>
                        <ToastContainer/>
                        <h3>INSIRA SEUS DADOS</h3>
                        <p>Para receber mais informações sobre como você pode usar a Hydra a seu favor.</p>
                        <fieldset>
                            <legend>Nome e sobrenome</legend>
                            <input type="text" id="nome" className="name" value={userName} onChange={e => setUserName(e.target.value)} required />
                        </fieldset>
                        <fieldset>
                            <legend>E-mail</legend>
                            <input type="text" id="email" className="email" value={email} onChange={e => setEmail(e.target.value)} required />
                        </fieldset>
                        <p className="error"></p>
                        <button type="submit" className="unsent">ENVIAR</button>
                    </Form>
                </div>
                <div className="saibaMais"> <a href="#history">
                    <p>Saiba mais</p>
                    <IoIosArrowDropdownCircle className="arrowIcon" id="history"/>
                </a> </div>
            </Section>
        </>
    )
}