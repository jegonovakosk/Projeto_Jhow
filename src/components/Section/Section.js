import React from "react";
import "./Section.css"

import Image from "../../image/IMG-8536.JPG"
const Section = ({ id }) => {
    return (
        <section id={id} className="content mt-5">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="d-flex txt-info">
                        <div className="txt-description" >
                            <h2><b>Quem somos?</b></h2>
                            <br />
                            <p>Somos uma empresa especializada em consultoria em ferrageamento e equilíbrio dos cascos e de cavalos, com o objetivo de promover performance sustentável, saúde e bem-estar desses animais.
                            Propomos levar saúde e equilíbrio aos cavalos pela manipulação dos cascos.
                            Sabemos que os cascos são fundamentais para a saúde e a capacidade biomecânica dos equinos e que interferem diretamente no bem estar dos cavalos, e é por isso que trabalhamos com uma abordagem abrangente e individualizada para cada cavalo que equilibramos.
                            Acreditamos que para alcançar o máximo desempenho e qualidade de vida, é necessário parametrizar, gerenciar e interferir em diversas variáveis dos cascos, do corpo e da psique do animal. Avaliamos cada cavalo de forma minuciosa em relação aos fatores que interferem sua performance e equilíbrio.
                            A partir dessas informações, criamos um plano de trabalho e de ferrageamento personalizado para cada indivíduo, levando em consideração as necessidades específicas de cada caso.
                            Nosso objetivo é auxiliar o proprietário e a toda equipe do cavalo a obter o melhor desempenho possível, sempre respeitando a natureza do animal e buscando sua saúde e bem-estar em primeiro lugar.
                            Com 25 anos de experiência e um amplo conhecimento técnico-científico, estamos prontos para oferecer uma consultoria de qualidade e excelência em ferrageamento e equilíbrio dos cascos de cavalos.
                            Venha nos conhecer e descubra como podemos ajudar a melhorar a performance e a qualidade de vida do seu cavalo!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex img-info">
                        <div >
                            <img src={Image} alt='' width={`100%`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;