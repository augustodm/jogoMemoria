import React, { Component } from 'react';

function Header (props){
        return(
            <div className="header">
                <div className="titulo">
                    <h1> Jogo da Memória!</h1>
                    <p>Score: {props.score} </p>
                </div>
                <button className="ajuda" onClick= {props.funcao}> Ajuda </button>
                <button className="denovo" onClick= {props.reload} > Jogar novamente </button>
            </div>
        );
    }

export default Header;