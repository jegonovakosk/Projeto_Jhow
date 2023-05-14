import React, { useEffect } from "react";
import "./CarouselTxt.css"

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CarouselTxt = () => {
    return (
        <>
            <Container className="d-flex txt-carousel">
                <Row >
                    <Carousel className="card" slide={false} interval={2000}>
                        <Carousel.Item>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Item>
                    </Carousel>

                </Row>

            </Container>
        </>
    )
}

export default CarouselTxt;