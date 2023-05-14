import React from "react";

import img from "../../image/horse-1804425_640.jpg"

const Card = ({ id }) => {

  const obj = [
    {
      img: img,
      txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      img: img,
      txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      img: img,
      txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
  ]
  return (
    <div id={id}>
      <div className="row m-1 vitrine">
        {obj.map((itens, i) => {
          return (
            <div className="card col-md-3 col-sm-12 col-xs-12 mt-2" key={i} >
              <img src={itens.img} className="card-img-top mt-3" alt="..." />
              <div classNameName="card-body mt-3">
                <p className="card-text mt-3 mb-3">{itens.txt}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card;