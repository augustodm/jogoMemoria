import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="titulo">
                    <h1> Jogo da Memória!</h1>
                    <p>Score: {this.props.score} </p>
                </div>
                <button className="ajuda" onClick= {this.props.funcao}> Ajuda </button>
                <button className="denovo" onClick= {this.props.reload} > Jogar novamente </button>
            </div>
        );
    }
}

export default Header;