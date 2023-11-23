import React, {Component} from 'react';

class Card extends Component {
    render(){
        return(
            <div className="col">
                <div className="card m-3" style={{width: '18rem', textAlign: 'center'}}>
                    
                    <img src={this.props.card.picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.name}</h5>
                        <p className="card-text">€ {this.props.card.price}</p>
                        <div className="d-grid gap-3 ">
                            <button onClick={()=> this.props.onIncrement(this.props.card)} className="btn btn-success">Aggiungi <span className="badge badge-light">{this.props.card.quantity}</span></button>
                            <button onClick={()=> this.props.onDelete(this.props.card)} className="btn btn-danger">Elimina</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}
export default Card;