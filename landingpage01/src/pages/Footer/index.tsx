
import { Space } from "../../components/Footer/Space"
import { Final } from "../../components/Footer/Final"
import solarsystem from '../../assets/solarsystem-colored.png'
import hydra from '../../assets/black-hole.png'

import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export function Footer() {
    const toTheTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <Space>
                <div className="imgWrapper">
                    <img src={solarsystem} alt="" />
                    <img src={hydra} alt="" />
                </div>
                <Final>
                    <div className="icons">
                        <a href="https://www.instagram.com/gabrielgui13/" target="_blank"><AiFillInstagram/></a>
                        <a href="https://github.com/GabrielGui13" target="_blank"><AiFillGithub/></a>
                        <a href="https://www.linkedin.com/in/gabrielgui13/" target="_blank"><AiFillLinkedin/></a>
                    </div>
                    <p>
                        <a href="#history">História</a> • <a href="#services">Serviços</a> • <a onClick={toTheTop}>Cadastre-se</a>
                    </p>
                    <p>Site desenvolvido por Gabriel Guilherme durante treinamento Hiring Coders.</p>
                    <p>Hydra &#169; Todos os direitos reservados </p>
                </Final>
            </Space>

        </>
    )
}