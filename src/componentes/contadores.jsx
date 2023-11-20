import React, {Component} from "react";
import Contador from "./contadorhook";

class Contadores extends Component {
    constructor(){
        super();
        this.state = {
            contadores: [
                {id:1, value: 0},
                {id:2, value: 4}
            ]
        };
    }

    render(){
        return (
            <div>
                {this.state.contadores.map(contador => 
                    <Contador key={contador.id} count={contador.value} />
                )}
            </div>
        )
    }
}

export default Contadores;