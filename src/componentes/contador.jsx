/*
import React from 'react';
function Contador(){
    return (
        <>
        <h1>Hola Mundo</h1>
        </>
    )
}
*/
import React, {Component} from 'react';
class Contador extends Component {
    constructor(prop){
        super();
        this.state = {
            count: prop.count
        };
    }
    /*
    state = {
        value: this.prop.value
    };
    */
    incremento = () => {
        this.setState({count: this.state.count + 1});
    }
    formatoContar(){
        const { count } = this.state;
        return count === 0 ? "Cero":count;
    }
    cambiarClase(){
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "linght":"primary";
        return classes;
    }
    render(){
        return (
            <>
                <div>
                    <span className={this.cambiarClase()}>{this.formatoContar()}</span>
                    <button
                        className="btn btn-secondary btn-sm" 
                        onClick={this.incremento}>Incremento</button>
                </div>
            </>
        )
    }
}

export default Contador;