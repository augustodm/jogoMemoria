import React, { Component } from 'react';

class Piece extends Component{
    render(){
        return(
            <div>
                <figure className="cards">
                    <img src={this.props.img}/>
                </figure>
            </div>
        );
    }
}

export default Piece;