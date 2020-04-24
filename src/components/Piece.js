import React, { Component, createFactory } from 'react';
import { pieceStatus } from '../constants';

class Piece extends Component{
    state={
    };

    virar = () => {
       if (this.state.path == this.props.defaultImg){
         this.setState({
         path : this.props.piece.imgPath
        })
        this.props.popular(this.props.piece);
        this.desvirar();
        }
    }

    desvirar = () => {
    }

    render() {
        return(
            <div>
                 <figure className="cards">
                    {this.props.piece.pieceStatus.BACK ? <img src={this.props.defaultImg} onClick={this.virar}/>
                    :
                    <img src={this.props.checkImg}/>                   
                    }
                </figure>
            </div>
        );
    }
}

export default Piece;

/*
 <div>
                <figure className="cards">
                if (this.props.pieceStatus === pieceStatus.BACK){
                    return (<img src={this.props.defaultImg} onClick={this.virar}/>);
                } else if (this.props.pieceStatus === pieceStatus.IS_MATCHED){
                    return (<img src={this.props.checkImg}/> );
                } else {
                    return (<img src={this.props.imgPath}/>);
                }
                </figure>
            </div>




passar uma função (status) para a imagem
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