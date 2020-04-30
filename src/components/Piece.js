import React, { Component, createFactory } from 'react';
import { pieceStatus } from '../constants';

class Piece extends Component{

    virar = () => {
        const {piece, virarCarta} = this.props;
        if(piece.status === pieceStatus.BACK){
            virarCarta({...piece});
        }
    }

    renderImg = (piece) => {
        const {defaultImg, checkImg} = this.props;
        switch (piece.status){
            case pieceStatus.BACK:  
                return <img src={defaultImg} onClick={this.virar}/>;
            case pieceStatus.FACE:
                return <img src={piece.imgPath}/>;
            case pieceStatus.IS_MATCHED:
                return <img src={checkImg}/>;
        }
    }

    render() {
        const {piece} = this.props;
        return(
            <div>
                <figure className="cards">
                    {this.renderImg(piece)}
                </figure>
            </div>
        );
    }
}

export default Piece;