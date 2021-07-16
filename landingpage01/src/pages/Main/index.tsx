import React, { FormEvent, useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

import { Header } from '../../components/Main/Header'
import { Nav } from '../../components/Main/Nav'
import { Section } from '../../components/Main/Section'
import { Form } from '../../components/Main/Form'

import { BiCheckCircle } from 'react-icons/bi'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

import blackHole from '../../assets/black-hole.png'

export function Main() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')

    const successMail = () => {
        toast.success('Email enviado com sucesso', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined
        })
    }

    const invalidInput = (aviso: string) => {
        toast.warn(aviso, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined
        })
    }

    const errorMail = (erro: string) => {
        toast.error(erro, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined
        })
    }

    const handleSendMail = async (e: FormEvent) => {
        e.preventDefault();
        
        if (userName.trim() === '' && email.trim() === '') {
            invalidInput('Preencha os espaços em branco!')
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

            console.log(showInfo)

            if (showInfo.errorMessage) {
                errorMail('Sentimos muito! Algo de errado aconteceu.')
            }
            else {
                setUserName('')
                setEmail('')
                successMail()
            }
        })
        .catch(err => errorMail('Sentimos muito! Algo de errado aconteceu.'))
    }

    let scroll = document.body.scrollTop

    useEffect(() => {
        if (scroll > 80 || scroll > 80) {
            console.log('shrink')
        }
        else {
            console.log('normal')
        }
    }, [scroll])

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
                        <li> <a href="#oi">HISTÓRIA</a> </li>
                        <li> <a href="#xau">PLANOS</a> </li>
                        <li> <a href="">SOBRE</a> </li>
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
                        <ToastContainer/>
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
                        <p className="error"></p>
                        <button type="submit" className="unsent">ENVIAR</button>
                    </Form>
                </div>
                <div className="saibaMais">
                    <p>Saiba mais</p>
                    <IoIosArrowDropdownCircle className="arrowIcon"/>
                </div>
            </Section>
            <p id="oi" style={{ height: '1000px' }}></p>
            <p id="xau" style={{ height: '1000px' }}></p>
        </>
    )
}