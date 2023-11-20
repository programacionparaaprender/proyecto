import React, {Component} from "react";

class Peliculas extends Component {
    constructor(){
        super();
        this.state = {
            peliculas: [
               {
                title:"título 1",
                genre: {
                    name:"Fantasia"
                },
                numberInStock: 20,
                dazilyRentalRate: 20
               },
               {
                title:"título 2",
                genre: {
                    name:"Fantasia"
                },
                numberInStock: 20,
                dazilyRentalRate: 20
               }
            ]
        };
    }
    render(){
        return (
            <><table className="table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Género</th>
                        <th>Disponibilidad</th>
                        <th>Calificación</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.peliculas.map(pelicula => <tr>
                        <td>{pelicula.title}</td>
                        <td>{pelicula.genre.name}</td>
                        <td>{pelicula.numberInStock}</td>
                        <td>{pelicula.dazilyRentalRate}</td>
                    </tr>
                    )}
                </tbody>
            </table><h2>Componente Peliculas</h2></>
        );
    }
}

export default Peliculas;