import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="titulo">
               <h1> Jogo da Memória!</h1>
               <p>Score: 0 </p>
               <button id="botao" onClick= {this.props.funcao}> Ajuda </button>
            </div>
        );
    }
}

export default Header;