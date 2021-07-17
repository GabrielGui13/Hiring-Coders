import { Cards } from "../../components/Planos/Cards"

import foguete from "../../assets/foguete.jpg"
import colonizacao from "../../assets/colonizacao.jpg"
import viaLactea from "../../assets/via-lactea.jpg"
import child from "../../assets/child.jpg"

import { FaUserAstronaut, FaChild } from "react-icons/fa"
import { RiRocket2Fill } from "react-icons/ri"
import { IoPlanetSharp } from "react-icons/io5"

export function Planos() {
    return (
        <>
            <h1 style={{fontFamily: "'Roboto', sans-serif", textAlign: 'center'}} id="services">Serviços</h1>
            <Cards>
                <div className="card" aria-haspopup="true">
                    <div className="imgBox">
                        <img src={child} alt="" style={{width: '500px'}}/>
                    </div>
                    <div className="content">
                        <h3>Imersão infantil</h3>
                        <p>
                            Projeto infanto-juvenil de imersão e visita a Hydra, com simulações ao vivo de caminhadas espaciais reais, ida aos foguetes, sondas além da interação 
                            direta com astronautas e cientistas da sede.
                        </p>
                    </div>
                    <span><FaChild/></span>
                </div>
                <div className="card" aria-haspopup="true">
                    <div className="imgBox">
                        <img src={foguete} alt="" />
                    </div>
                    <div className="content">
                        <h3>Viagens espaciais</h3>
                        <p>
                            Em parceria com as empresas afiliadas, a Hydra oferece a oportunidade para que você possa assistir ativamente, e também participar de uma viagem espacial 
                            planejada pela empresa.
                        </p>
                    </div>
                    <span><RiRocket2Fill/></span>
                </div>
                <div className="card" aria-haspopup="true">
                    <div className="imgBox">
                        <img src={colonizacao} alt="" />
                    </div>
                    <div className="content">
                        <h3>Colonização em massa</h3>
                        <p>
                            Programa de colonização para popular novos satélites e planetas. A inscrição nesse serviço colocará você em uma fila de primeira instância para 
                            oportunidades de hibernar e acordar em outra atmofera. 
                        </p>
                    </div>
                    <span><FaUserAstronaut/></span>
                </div>
                <div className="card" aria-haspopup="true">
                    <div className="imgBox">
                        <img src={viaLactea} alt="" />
                    </div>
                    <div className="content">
                        <h3>Exploração da galáxia</h3>
                        <p>
                            Profissionais treinados e capacitados têm a chance de sair em busca de novos planetas habitáveis, novas matérias, e estudar a fundo cada astro e cada 
                            lugar desconhecido da galáxia.
                        </p>
                    </div>
                    <span><IoPlanetSharp/></span>                   
                </div>
            </Cards>
        </>
    )
}