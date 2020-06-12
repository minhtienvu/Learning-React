import React, { Component }  from 'react';

class Product extends Component {

  constructor(props){
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this)
  }

  onAddToCart(){
    alert(this.props.price);
  }

  render () {
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.price}</p>
            <a href="#" className="btn btn-primary" onClick={ this.onAddToCart  }>Go somewhere</a>
          </div>
        </div>
      </div>
    )
  } 
}

export default Product;