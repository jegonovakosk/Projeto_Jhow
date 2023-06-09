import React, { useEffect } from "react";
import "./CarouselTxt.css"

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CarouselTxt = () => {
    return (
        <>
        <div className="service">
            <h2>Testemunhos</h2>
        </div>
            <Container className="d-flex txt-carousel">
                <Row >
                    <Carousel className="card" slide={false} interval={5000}>
                        <Carousel.Item>
                            <h3><b>Titulo Testemunho 1.</b></h3>
                            <p>Excelente trabalho! Você claramente colocou muita dedicação e esforço em completar essa tarefa de forma tão precisa e eficiente. Você claramente colocou muita dedicação.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3><b>Titulo Testemunho 2.</b></h3>
                            <p>Parabéns pelo seu excelente desempenho neste projeto. Sua habilidade em gerenciar as tarefas e garantir que tudo foi concluído dentro do prazo é verdadeiramente impressionante.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3><b>Titulo Testemunho 3.</b></h3>
                            <p>
                            Estou muito satisfeito com o resultado final do seu trabalho. Você mostrou uma grande atenção aos detalhes e demonstrou habilidades excepcionais em sua execução. Obrigado por um trabalho incrível!
                            </p>
                        </Carousel.Item>
                    </Carousel>

                </Row>

            </Container>
        </>
    )
}

export default CarouselTxt;