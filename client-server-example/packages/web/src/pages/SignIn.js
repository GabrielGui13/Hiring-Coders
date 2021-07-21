import React, { useState } from 'react';

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/authenticate', { //api nativa dos browsers para trabalhar com requisicoes e promise
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((response) => {response.json()}) //erro de cors de primeira
        .then((data) => console.log('Success', data))
    }

    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    id="email" 
                    inputMode="email" 
                    value={email}
                    onChange={handleEmailChange} 
                    autoComplete="username" 
                />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="current-password" 
                />
            </fieldset>
            <button type="submit">Enviar</button>
        </form>
    )
}