import React, { Component } from 'react';
import Piece from './components/Piece';
import Header from './components/Header';

const imgDefault = require("./assets/img/frente.jpg");
const pecas = [
    { id:1, name: 'ash', imgPath: require("./assets/img/ash.jpg")},
    { id:2, name: 'charizard', imgPath: require("./assets/img/charizard.jpg")},
    { id:3, name: 'evee', imgPath: require("./assets/img/evee.jpg")},
    { id:4, name: 'gyarados', imgPath: require("./assets/img/gyarados.jpg")},
    { id:5, name: 'pikachu', imgPath: require("./assets/img/pikachu.jpg")},
    { id:6, name: 'pokemon', imgPath: require("./assets/img/pokemon.jpg")},
    { id:7, name: 'sandshrew', imgPath: require("./assets/img/sandshrew.png")},
    { id:8, name: 'umbreon', imgPath: require("./assets/img/umbreon.jpg")},
    { id:9, name: 'victreebel', imgPath: require("./assets/img/victreebel.jpg")},
    { id:10, name: 'wartole', imgPath: require("./assets/img/wartole.jpg")},
    { id:11, name: 'charmander', imgPath: require("./assets/img/charmander.jpg")},
    { id:12, name: 'bulbasaur', imgPath: require("./assets/img/bulba.jpg")},
    { id:13, name: 'ash', imgPath: require("./assets/img/ash.jpg")},
    { id:14, name: 'charizard', imgPath: require("./assets/img/charizard.jpg")},
    { id:15, name: 'evee', imgPath: require("./assets/img/evee.jpg")},
    { id:16, name: 'gyarados', imgPath: require("./assets/img/gyarados.jpg")},
    { id:17, name: 'pikachu', imgPath: require("./assets/img/pikachu.jpg")},
    { id:18, name: 'pokemon', imgPath: require("./assets/img/pokemon.jpg")},
    { id:19, name: 'sandshrew', imgPath: require("./assets/img/sandshrew.png")},
    { id:20, name: 'umbreon', imgPath: require("./assets/img/umbreon.jpg")},
    { id:21, name: 'victreebel', imgPath: require("./assets/img/victreebel.jpg")},
    { id:22, name: 'wartole', imgPath: require("./assets/img/wartole.jpg")},
    { id:23, name: 'charmander', imgPath: require("./assets/img/charmander.jpg")},
    { id:24, name: 'bulbasaur', imgPath: require("./assets/img/bulba.jpg")},
];

function ajuda(){
    alert("Clique nas cartas para virá-las. Basta memorizar a posição de cada carta e criar pares.");
}

class App extends Component {

    /*constructor(props){
        super(props);
        this.state={
    
        };
    }*/
    
    render(){
        return(
            <div className="container">
                <div className="cabecalho">
                <Header funcao={ajuda}/>
                </div>
                {pecas.map(peca => (
                    <Piece img={peca.imgPath} default={imgDefault}/>
                ))}
            </div>
        );
    }
}

export default App;