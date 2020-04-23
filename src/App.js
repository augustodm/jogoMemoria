import React, { Component } from 'react';
import Piece from './components/Piece';
import Header from './components/Header';

const imgDefault = require("./assets/img/frente.jpg");
const imgCheck = require("./assets/img/check.png");
const pecas = [ 
    { id:1, isMatch: false, name: 'ash', imgPath: require("./assets/img/ash.jpg")},
    { id:2, isMatch: false, name: 'charizard', imgPath: require("./assets/img/charizard.jpg")},
    { id:3, isMatch: false, name: 'evee', imgPath: require("./assets/img/evee.jpg")},
    { id:4, isMatch: false, name: 'gyarados', imgPath: require("./assets/img/gyarados.jpg")},
    { id:5, isMatch: false, name: 'pikachu', imgPath: require("./assets/img/pikachu.jpg")},
    { id:6, isMatch: false, name: 'pokemon', imgPath: require("./assets/img/pokemon.jpg")},
    { id:7, isMatch: false, name: 'sandshrew', imgPath: require("./assets/img/sandshrew.jpg")},
    { id:8, isMatch: false, name: 'umbreon', imgPath: require("./assets/img/umbreon.jpg")},
    { id:9, isMatch: false, name: 'victreebel', imgPath: require("./assets/img/victreebel.jpg")},
    { id:10, isMatch: false, name: 'wartole', imgPath: require("./assets/img/wartole.jpg")},
    { id:11, isMatch: false, name: 'charmander', imgPath: require("./assets/img/charmander.jpg")},
    { id:12, isMatch: false, name: 'bulbasaur', imgPath: require("./assets/img/bulba.jpg")},
    { id:13, isMatch: false, name: 'ash', imgPath: require("./assets/img/ash.jpg")},
    { id:14, isMatch: false, name: 'charizard', imgPath: require("./assets/img/charizard.jpg")},
    { id:15, isMatch: false, name: 'evee', imgPath: require("./assets/img/evee.jpg")},
    { id:16, isMatch: false, name: 'gyarados', imgPath: require("./assets/img/gyarados.jpg")},
    { id:17, isMatch: false, name: 'pikachu', imgPath: require("./assets/img/pikachu.jpg")},
    { id:18, isMatch: false, name: 'pokemon', imgPath: require("./assets/img/pokemon.jpg")},
    { id:19, isMatch: false, name: 'sandshrew', imgPath: require("./assets/img/sandshrew.jpg")},
    { id:20, isMatch: false, name: 'umbreon', imgPath: require("./assets/img/umbreon.jpg")},
    { id:21, isMatch: false, name: 'victreebel', imgPath: require("./assets/img/victreebel.jpg")},
    { id:22, isMatch: false, name: 'wartole', imgPath: require("./assets/img/wartole.jpg")},
    { id:23, isMatch: false, name: 'charmander', imgPath: require("./assets/img/charmander.jpg")},
    { id:24, isMatch: false, name: 'bulbasaur', imgPath: require("./assets/img/bulba.jpg")},
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
            duo[0].isMatch = true;
            duo[1].isMatch = true;
            this.state.score++;
            if (this.state.score === 12){
                alert("Parebéns você ganhou!!!");
            }
            else {
            }
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
                    <Piece piece={peca} duo={this.state.duo.length} default={imgDefault} check={imgCheck} popular={this.popular}/>
                ))}
            </div>
        );
    }
}

export default App;