import React, { Component }  from 'react';
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    let products = [
      {
        id: 1,
        name: "Iphone 6",
        price: 10000,
        status: false
      },
      {
        id: 2,
        name: "Iphone 7 plus",
        price: 19000,
        status: true
      },
      {
        id: 3,
        name: "Iphone XSMAX",
        price: 380000,
        status: true
      }
    ]
    let elements = products.map((product, index) => {
      let result = '';
      if(product.status) {
        result = <Product 
          key={product.id}
          price={product.price}
        >
          { product.name }
        </Product>
      }
      return result
    })
  
    return (
      <div>
        <h1> Tien dep trai</h1>
        <button className="btn" onClick={ () => { this.info() } }>
                Notification <span className="badge badge-primary"></span>
        </button>
      <div>{ elements }</div>
      </div>
    );
  }
}

export default App;