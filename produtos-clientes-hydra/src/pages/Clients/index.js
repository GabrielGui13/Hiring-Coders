import React, { useState } from 'react'
import { ClientContent } from '../../components/Clients/Content'
import { ClientForm } from '../../components/Clients/ClientForm'
import { ClientTable } from '../../components/Clients/ClientTable'

import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'; //npm install @hookform/resolvers yup
import Swal from 'sweetalert2'
import cep from 'cep-promise'

const firstClient = {
    id: "1",
    name: "Gabriel",
    email: "gabriel@teste.com",
    cellphone: "84991919191",
    country: "Brasil",
    cep: "59032400",
    state: "RN",
    city: "Natal",
    neighbourhood: "Alecrim",
    street: "Rua do Medo"
}

const schema = yup.object().shape({
    name: yup.string().required('Preencha o campo do nome'),
    email: yup.string().email("Digite um email válido").required("Preencha o campo de email"),
    cellphone: yup.number().min(10, 'O telefone deve ter 11 digitos: ddd + numero').required('Preencha um numero de telefone valido').typeError('O numero de telefone deve ter 11 dígitos numéricos'),
    country: yup.string().required('Preencha o campo do pais'),
    cep: yup.number()
        .typeError("O CEP deve ter 8 dígitos numéricos")
        .positive('Insira um número válido')
        .min(7, "O CEP deve ter 8 dígitos numéricos")
        .required("Informe o CEP de sua residencia"),
    state: yup.string().required("Preencha o campo do estado").min(1).max(2),
    city: yup.string().required("Preencha o campo da cidade"),
    neighbourhood: yup.string().required("Preencha o campo da bairro"),
    street: yup.string().required("Preencha o campo da rua")
})

const database = [firstClient]

export function Clients() {
    if (localStorage.getItem('clients') === null) localStorage.setItem('clients', JSON.stringify(database))

    const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});

    const onFormSubmit = (data) => {
        data.id = database.length + 1
        database.push(data)
        localStorage.setItem('clients', JSON.stringify(database))
        Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Cliente cadastrado com sucesso!',
            confirmButtonColor: '#f23568'
        })
    }

    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [neigh, setNeigh] = useState('')
    const [street, setStreet] = useState('')

    const clientAddress = (e) => {
        const address = cep(e.target.value)
            .then(data => {
                setState(data.state)
                setCity(data.city)
                setNeigh(data.neighborhood)
                setStreet(data.street)
            })
    }

    return (
        <>
            <ClientContent>
                <ClientForm onSubmit={handleSubmit(onFormSubmit)}>
                    <h2>Cliente</h2>
                    <div className="name-field">
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" id="nome" {...register('name')} placeholder="Nome"/>
                        <p>{errors.name?.message}</p>
                    </div>
                    <div className="email-field">
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" {...register('email')} placeholder="email@xxxx.com"/>
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className="cellphone-field">
                        <label htmlFor="celular">Celular: </label>
                        <input type="text" id="celular" {...register('cellphone')} placeholder="xx xxxxx xxxx"/>
                        <p>{errors.cellphone?.message}</p>
                    </div>
                    <div className="country-field">
                        <label htmlFor="pais">Pais: </label>
                        <input type="text" id="pais" {...register('country')} placeholder="Ex: Brasil"/>
                        <p>{errors.country?.message}</p>
                    </div>
                    <div className="cep-field">
                        <label htmlFor="cep">CEP: </label>
                        <input type="text" id="cep" {...register('cep')} placeholder="Informe o CEP para seu endereço" onBlur={clientAddress}/>
                        <p>{errors.cep?.message}</p>
                    </div>
                    <div className="state-field">
                        <label htmlFor="estado">Estado: </label>
                        <input type="text" id="estado" {...register('state')} placeholder="Ex: RN" value={state || ''} onChange={e => setState(e.target.value)} />
                        <p>{errors.state?.message}</p>
                    </div>
                    <div className="city-field">
                        <label htmlFor="cidade">Cidade: </label>
                        <input type="text" id="cidade" {...register('city')} placeholder="Ex: Natal" value={city || ''} onChange={e => setCity(e.target.value)} />
                        <p>{errors.city?.message}</p>
                    </div>
                    <div className="neigh-field">
                        <label htmlFor="bairro">Bairro: </label>
                        <input type="text" id="bairro" {...register('neighbourhood')} placeholder="Ex: Alecrim" value={neigh || ''} onChange={e => setNeigh(e.target.value)} />
                        <p>{errors.neighbourhood?.message}</p>
                    </div>
                    <div className="street-field">
                        <label htmlFor="rua">Rua: </label>
                        <input type="text" id="rua" {...register('street')} placeholder="Ex: Rua xxxxxx" value={street || ''} onChange={e => setStreet(e.target.value)} />
                        <p>{errors.street?.message}</p>
                    </div>
                    <button type="submit">Enviar</button>
                </ClientForm>
                <ClientTable>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Pais</th>
                        <th>CEP</th>
                        <th>Estado</th>
                        <th>Cidade</th>
                        <th>Bairro</th>
                        <th>Rua</th>
                    </tr>
                    {JSON.parse(localStorage.getItem('clients')).map(client => {
                        return (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.cellphone}</td>
                                <td>{client.country}</td>
                                <td>{client.cep}</td>
                                <td>{client.state}</td>
                                <td>{client.city}</td>
                                <td>{client.neighbourhood}</td>
                                <td>{client.street}</td>
                            </tr>
                        )
                    })}
                </ClientTable>
            </ClientContent>
        </>
    )
}