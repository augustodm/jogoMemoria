import React, { Component } from 'react';
import Piece from './components/Piece';
import Header from './components/Header';
import { pieceStatus } from './constants';

const imgDefault = require("./assets/img/frente.jpg");
const imgCheck = require("./assets/img/check.png");

const pecas = [ 
    { id:1, status: pieceStatus.BACK, name: 'ash', imgPath: require("./assets/img/ash.jpg")},
    { id:2, status: pieceStatus.BACK, name: 'charizard', imgPath: require("./assets/img/charizard.jpg")},
    { id:3, status: pieceStatus.BACK, name: 'evee', imgPath: require("./assets/img/evee.jpg")},
    { id:4, status: pieceStatus.BACK, name: 'gyarados', imgPath: require("./assets/img/gyarados.jpg")},
    { id:5, status: pieceStatus.BACK, name: 'pikachu', imgPath: require("./assets/img/pikachu.jpg")},
    { id:6, status: pieceStatus.BACK, name: 'pokemon', imgPath: require("./assets/img/pokemon.jpg")},
    { id:7, status: pieceStatus.BACK, name: 'sandshrew', imgPath: require("./assets/img/sandshrew.jpg")},
    { id:8, status: pieceStatus.BACK, name: 'umbreon', imgPath: require("./assets/img/umbreon.jpg")},
    { id:9, status: pieceStatus.BACK, name: 'victreebel', imgPath: require("./assets/img/victreebel.jpg")},
    { id:10, status: pieceStatus.BACK, name: 'wartole', imgPath: require("./assets/img/wartole.jpg")},
    { id:11, status: pieceStatus.BACK, name: 'charmander', imgPath: require("./assets/img/charmander.jpg")},
    { id:12, status: pieceStatus.BACK, name: 'bulbasaur', imgPath: require("./assets/img/bulba.jpg")},
    { id:13, status: pieceStatus.BACK, name: 'ash', imgPath: require("./assets/img/ash.jpg")},
    { id:14, status: pieceStatus.BACK, name: 'charizard', imgPath: require("./assets/img/charizard.jpg")},
    { id:15, status: pieceStatus.BACK, name: 'evee', imgPath: require("./assets/img/evee.jpg")},
    { id:16, status: pieceStatus.BACK, name: 'gyarados', imgPath: require("./assets/img/gyarados.jpg")},
    { id:17, status: pieceStatus.BACK, name: 'pikachu', imgPath: require("./assets/img/pikachu.jpg")},
    { id:18, status: pieceStatus.BACK, name: 'pokemon', imgPath: require("./assets/img/pokemon.jpg")},
    { id:19, status: pieceStatus.BACK, name: 'sandshrew', imgPath: require("./assets/img/sandshrew.jpg")},
    { id:20, status: pieceStatus.BACK, name: 'umbreon', imgPath: require("./assets/img/umbreon.jpg")},
    { id:21, status: pieceStatus.BACK, name: 'victreebel', imgPath: require("./assets/img/victreebel.jpg")},
    { id:22, status: pieceStatus.BACK, name: 'wartole', imgPath: require("./assets/img/wartole.jpg")},
    { id:23, status: pieceStatus.BACK, name: 'charmander', imgPath: require("./assets/img/charmander.jpg")},
    { id:24, status: pieceStatus.BACK, name: 'bulbasaur', imgPath: require("./assets/img/bulba.jpg")},
];

embaralha(pecas);

function ajuda(){
    alert("Clique nas cartas para virá-las. Basta memorizar a posição de cada carta e criar pares.");
}

function embaralha(pecas) {

    for (let i = pecas.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        const elemento = pecas[i - 1];
        pecas[i - 1] = pecas[indiceAleatorio];
        pecas[indiceAleatorio] = elemento;
    }
}

class App extends Component {
    state={
        pecas : pecas,
        duo : [],
        score : 0
    };

    match = (duo) => {
        if (duo[0].name == duo[1].name){
            duo[0].pieceStatus = pieceStatus.IS_MATCHED;
            duo[1].pieceStatus = pieceStatus.IS_MATCHED;
            this.setState({
                score : this.state.score + 1
            })
            if (this.state.score === 12){
                alert("Parebéns você ganhou!!!");
            } 
        }
        else {
            duo[0].pieceStatus = pieceStatus.BACK;
            duo[1].pieceStatus = pieceStatus.BACK;
        }
    }

    popular = (peca) => { 
        const duo = this.state.duo;
        duo.push(peca);
        this.setState({
            duo
        })
        console.log('this.duo', this.state.duo); 
        if (this.state.duo.length == 2){
            this.match(this.state.duo);
            this.setState({
                duo : []
            })
        }
    }
    
    reload = () =>{
        window.location.reload()
    }

    render(){
        return(
            <div className="container">
                <div className="cabecalho">
                <Header funcao={ajuda} reload={this.reload} score={this.state.score}/>
                </div>
                {this.state.pecas.map(peca => (
                    <Piece piece={peca} defaultImg={imgDefault} checkImg={imgCheck} popular={this.popular}/>
                ))}
            </div>
        );
    }
}

export default App;