import React from 'react'
import { ProductContent } from '../../components/Products/Content'
import { ProductForm } from '../../components/Products/ProductForm'
import { ProductTable } from '../../components/Products/ProductTable'

import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'; //npm install @hookform/resolvers yup
import Swal from 'sweetalert2'

const firstProduct = {
    id: "1",
    brand: "Hydra",
    name: "Endurance G26",
    price: "4999.00",
    description: "Nave espacial de alta propulsão, modelo G26 da linha Endurance",
    qtd: "1"
}

const schema = yup.object().shape({
    brand: yup.string().required("Preencha o campo da marca"),
    name: yup.string().required('Preencha o campo do nome'),
    price: yup.number().positive('Insira um número válido').required('Preencha o campo do pais').typeError('Insira um número válido'),
    description: yup.string().required('Preencha o campo da descricao'),
    qtd: yup.number().positive('Insira um número válido').required('Preencha o campo de quantidade').typeError('Insira um número válido'),
})

const database = [firstProduct] 

export function Products() {
    if (localStorage.getItem('products') === null) localStorage.setItem('products', JSON.stringify(database))

    const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});

    const onFormSubmit = (data) => {
        data.id = database.length + 1
        database.push(data)
        console.log(data)
        localStorage.setItem('products', JSON.stringify(database))
        Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Produto cadastrado com sucesso!',
            confirmButtonColor: '#f23568'
        })
    }

    return (
        <>
            <ProductContent>
                <ProductForm onSubmit={handleSubmit(onFormSubmit)}>
                    <h2>Produto</h2>
                    <div className="brand-field">
                        <label htmlFor="marca">Marca: </label>
                        <input type="text" name="marca" field {...register('brand')} placeholder="Ex: Marca"/>
                        <p>{errors.brand?.message}</p>
                    </div>
                    <div className="name-field">
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" id="nome" field {...register('name')} placeholder="Nome"/>
                        <p>{errors.name?.message}</p>
                    </div>
                    <div className="price-field">
                        <label htmlFor="preço">Preço: </label>
                        <input type="number" name="preço" field {...register('price')} placeholder="Ex: 4999"/>
                        <p>{errors.price?.message}</p>
                    </div>
                    <div className="description-field">
                        <label htmlFor="Descrição">Descrição: </label>
                        <textarea name="Descrição" field {...register('description')} />
                        <p>{errors.description?.message}</p>
                    </div>
                    <div className="qtd-field">
                        <label htmlFor="Quantidade">Quantidade: </label>
                        <input type="number" name="Quantidade" field {...register('qtd')} placeholder="Ex: 2"/>
                        <p>{errors.qtd?.message}</p>
                    </div>
                    <button type="submit">Enviar</button>
                </ProductForm>
                <ProductTable>
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Qtd</th>
                    </tr>
                    {JSON.parse(localStorage.getItem('products')).map(product => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.brand}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.qtd}</td>
                            </tr>
                        )
                    })}
                </ProductTable>
            </ProductContent>
        </>
    )
}