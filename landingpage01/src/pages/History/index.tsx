import React, { HTMLAttributes } from 'react'
import myself from './../../assets/me.png'
import planet from './../../assets/planet.png'
import hydra from './../../assets/black-hole.png'
import google from './../../assets/google.png'
import amazon from './../../assets/amazon.png'
import nasa from './../../assets/nasa.png'
import spacex from './../../assets/spacex.png'
import tesla from './../../assets/tesla.png'

import { Author } from '../../components/History/Author'

export function History() {
    return (
        <>
            <Author>
                <img src={planet} alt="fundo" />
                <h1>Sobre o criador</h1>
                <h3>- CEO da Hydra -</h3>  
                <div className="content">
                    <img src={myself} alt="Gabriel Guilherme" />
                    <div className="description">
                        <h2>Gabriel Guilherme</h2>
                        <p> Nascido em 2002 em Natal/RN </p>
                        <p>
                            Gabriel Guilherme (2002 -), nascido em Natal/RN, é o atual CEO da multinacional Hydra e já trabalhou em outras grandes empresas tais como Google, Amazon,
                            Nasa, SpaceX e Tesla. Formado em Engenharia da Computação, Astronomia e Física, Gabriel sempre ocupou posições de liderança por onde passava e foi o primeiro
                            brasileiro a pisar em Marte, além de ter sido o inventor da S.B.H.E.P (Sonda Especializada de Exploração de Buraco Negro), que contribuiu em diversos
                            estudos sobre a matéria negra, física quântica, e deu o pontapé inicial nos estudos mais aprofundados sobre a manipulação da quarta dimensão e a singularidade. 
                        </p>
                        <p>
                            A foto anterior retrata um marco histórico para a ciência, o homem mais jovem capacitado a sair da atmosfera terrestre, com apenas 18 anos, Gabriel levou
                            sua empresa ao topo, o que a fez ser uma das maiores companhias aeroespacias do mundo, e a primeira a ultrapassar os limites astronômicos que haviam sido 
                            impostos. A jornada espacial conhecida como Missão Arael foi uma caminhada até as luas de Júpiter, no intuito de estudar a órbita de seus satélites naturais
                            e calcular a porcentagem de sobrevivência nas luas. O experimento teve colaboração da Alexion Pharmaceuticals, que junto a Hydra ficou responsável por
                            cultivar bactérias cobaias para medir o nível de oxigênio e taxa de mortalidade dos astros.
                        </p>
                        <p>
                            Hoje o foco da Hydra está no desenvolvimento de módulos de sobrevivência espaciais, em conjunto com a NASA e a SpaceX, os módulos estão sendo criados para 
                            iniciar o processo de colonização do nosso vizinho: Marte. A empresa visa agora na comunicação da ciência acessível a qualquer um, e compartilha seu
                            conhecimento para entusiastas do espaço e vende quadrantes espacias, vagas em exploração do espaço para o público, e vagas em projetos de colonização de 
                            planetas, além de ser totalmente aberto para a ajuda necessária quando se trata da sobrevivência da espécie.
                        </p>
                    </div>
                    <div className="companies">
                        <img src={hydra} alt="" />
                        <img src={google} alt="" />
                        <img src={amazon} alt="" />
                        <img src={nasa} alt="" />
                        <img src={spacex} alt="" />
                        <img src={tesla} alt="" />
                    </div>
                </div>
            </Author>
        </>
    )
}