import React, { Component } from 'react';
import Piece from './components/Piece';
import Header from './components/Header';
const imgDefault = require("./assets/img/frente.jpg");
const pecas = [
    { name: 'ash', imgPath: require("./assets/img/ash.jpg")},
    { name: 'charizard', imgPath: require("./assets/img/charizard.jpg")},
    { name: 'evee', imgPath: require("./assets/img/evee.jpg")},
    { name: 'gyarados', imgPath: require("./assets/img/gyarados.jpg")},
    { name: 'pikachu', imgPath: require("./assets/img/pikachu.jpg")},
    { name: 'pokemon', imgPath: require("./assets/img/pokemon.jpg")},
    { name: 'sandshrew', imgPath: require("./assets/img/sandshrew.png")},
    { name: 'umbreon', imgPath: require("./assets/img/umbreon.jpg")},
    { name: 'victreebel', imgPath: require("./assets/img/victreebel.jpg")},
    { name: 'wartole', imgPath: require("./assets/img/wartole.jpg")},
    { name: 'charmander', imgPath: require("./assets/img/charmander.jpg")},
    { name: 'bulbasaur', imgPath: require("./assets/img/bulba.jpg")},
];

function linkar(){
    alert("Clique nas cartas para virá-las. Basta memorizar a posição de cada carta e criar pares.");
}

class App extends Component {
    render(){
        return(
            <div className="container">
                <div className="cabecalho">
                <Header funcao={linkar}/>
                </div>
                {pecas.map(peca => (
                    <Piece img={peca.imgPath}/>
                ))}
            </div>
        );
    }
}

export default App;