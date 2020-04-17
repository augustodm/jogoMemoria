import React, { Component, createFactory } from 'react';

class Piece extends Component{
    state={
        imgPath : this.props.default,  
    };

    render(){
        return(
            <div>
                <figure className="cards">
                    <img id="carta" src={this.props.img}/> 
                </figure>
            </div>
        );
    }
}

export default Piece;
/* passar uma função (status) para a imagem
se o status for cima : mostra a imagem correta
se o status for baixo mostra a carta virada para baixo
a funçao virar seria responsavel por toda vez q for chamada trocar o status da carta */