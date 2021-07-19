import React from 'react'
import { toast } from 'react-toastify';
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi'
import { VscError } from 'react-icons/vsc'

type toastParams = {
    texto: string;
}

// Toasts content
const SuccessToast = () => {
    return (
        <>
            <BiCheckCircle className="successIcon"/>
            <span>E-mail enviado com sucesso!</span>
        </>
    )
}

const WarningToast = ({texto}: toastParams) => {
    return (
        <>
            <BiErrorCircle/>
            <span>{texto}</span>
        </>
    )
}

const ErrorToast = ({texto}: toastParams) => {
    return (
        <>
            <VscError/>
            <span>{texto}</span>
        </>
    )
}


// Toasts call
export const successMail = () => {
    toast.success(<SuccessToast/> ,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
    })
}

export const invalidInput = (aviso: string) => {
    toast.warn(<WarningToast texto={aviso}/>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
    })
}

export const errorMail = (erro: string) => {
    toast.error(<ErrorToast texto={erro}/>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
    })
}