import React from "react";

import img from "../../image/IMG-8536.JPG"
import "./Card.css"

const Card = ({ id }) => {
  const imagens = [

  ]
  const obj = [
    {
      img: img,
      txt: 'EYE CHECK BALANCE PRESENCIAL'
    },
    {
      img: img,
      txt: 'EYE CHECK BALANCE VIRTUAL'
    },
    {
      img: img,
      txt: 'AVALIAÇÃO DO EQUILÍBRIO '
    },
    {
      img: img,
      txt: 'PROGRAMA E ASSESSORIA A PROPRIETÁRIOS -PRESENCIAL'
    },
    {
      img: img,
      txt: 'PROGRAMA E ASSESSORIA A PROPRIETÁRIOS - À DISTÂNCIA'
    },
    {
      img: img,
      txt: 'ASSESSORIA A EQUIPES, FEDERAÇÕES PRÁTICAS '
    },
    {
      img: img,
      txt: 'ASSESSORIA A INVESTIDORES '
    },
    {
      img: img,
      txt: 'FERRAGEAMENTO PRESENCIAL - ANÁLISE, DIAGNÓSTICO, CONDUÇÃO TÉCNICA E EXECUTIVA DO FERRAGEAMENTO'
    },
    {
      img: img,
      txt: 'TELE FERRAGEAMENTO - ANÁLISE PRÉVIA, INTREVISTA, DIAGNÓSTICO, CONDUÇÃO TÉCNICA E EXECUTIVA DO FERRAGEAMENTO'
    }
   
  ]
  return (
    <div id={id}>

      <div className="row m-1 vitrine">
        <div className="service">
        <h2><b>Serviços</b></h2>
        </div>
        {obj.map((itens, i) => {
          return (

            <div className="card col-md-3 col-sm-12 col-xs-12 m-2 mb-5" key={i} >
              <img src={itens.img} className="card-img-top" alt="..." />
              <div classNameName="card-body">
                <p className="card-text">{itens.txt}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card;