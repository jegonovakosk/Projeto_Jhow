import React from "react";
import "./Mission.css";

const Mission = ({id}) => {
    return (
        <div id={id} className='container missao mt-5'>
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 texto">
                    <h5><b>Missao</b></h5>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                             making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                             and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="col-md-12 col-xs-12 texto">
                    <h5><b>Valores</b></h5>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                             making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                             and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>

            </div>
        </div>
    )
}
export default Mission;