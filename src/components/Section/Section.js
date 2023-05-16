import React from "react";
import "./Section.css"

import Image from "../../image/IMG-8536.JPG"
const Section = ({ id }) => {
    return (
        <section id={id} className="content mt-5">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex txt-info">
                        <div className="txt-description" >
                            <h3><b>Titulo do resumo.</b></h3>
                            <br/>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                             making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                             and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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