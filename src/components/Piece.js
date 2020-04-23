import React, { Component, createFactory } from 'react';

class Piece extends Component{
    state={
        path : this.props.default,
    };

    virar = () => {
        if (this.state.path == this.props.default){
         this.setState({
         path : this.props.piece.imgPath
        })
        this.props.popular(this.props.piece);
        this.desvirar();
        }
    }

    desvirar = () =>{
        
    }

    render() {
        return(
            <div>
                <figure className="cards">
                    {(!this.props.piece.isMatch) ? (
                     <img src={this.state.path} onClick={this.virar}/>    
                    ) : (
                        <img src={this.props.check}/>   
                    ) }   
                </figure>
            </div>
        );
    }
}

export default Piece;

/* passar uma função (status) para a imagem
se o status for cima : mostra a imagem correta
se o status for baixo mostra a carta virada para baixo
a funçao virar seria responsavel por toda vez q for chamada trocar o status da carta 

 state={
        path : this.props.img
    };

    virar = () => {
        if (this.state.path == this.props.default)
        this.setState({
            path : this.props.piece.imgPath
        })
        else 
        this.setState({
            path : this.props.default
        })
    }
*/