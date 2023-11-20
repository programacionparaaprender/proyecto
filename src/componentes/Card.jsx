import React from "react";
import imagen1 from "../assets/imagen.jpeg";
import imagen2 from "../assets/imagen2.jpeg";
import imagen3 from "../assets/imagen3.jpeg";
function Card(){
    return (
        <div className="card">
            <img src={imagen1} width="100" alt="imagen 1" />
            <img src={imagen2} width="100" alt="imagen 2" />
            <img src={imagen3} width="100" alt="imagen 3" />
            <div className="card-body text-center">
                <h4 className="card-title">Título</h4>
                <p className="card-text text-justify text-secondary text-center">
                    Lorem ipsum, dolor sit amet cosecteur adipisicing
                </p>
            </div>
        </div>
    );
}

export default Card;