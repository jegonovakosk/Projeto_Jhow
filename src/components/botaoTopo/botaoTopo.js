import React from "react";
import './botaoTopo.css';
import seta from "../../image/seta2.png";

const botaoTopo = () => {
    return (
        <>
            <div className="botao">
                <a href="#teste0">
                    <img src={seta} className="seta"></img>
                </a>
            </div>


        </>
    );
}

export default botaoTopo;