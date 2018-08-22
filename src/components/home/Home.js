import React from 'react'
import request from 'superagent'
import './home.css'

class Home extends React.Component{
  constructor(){
    super();
    this.state ={
      product: 'Featured',
      featured: []
    }
  }

  getFeaturedProducts = () => {
    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var productsShow = [];
        var counter = 0

        productos.map(producto =>{
          counter += 1

          if(counter < 7){
            productsShow.push(producto);
          }
        })

        this.setState({
          featured: productsShow
        })
        console.log(this.state.featured)
      })
  }

  componentWillMount(){
    if(this.state.product === 'Featured'){
      this.getFeaturedProducts();
    }
  }

    render() {
      return (
        <div>
          <div className="image-container">
            <h1>Mallory Furniture</h1>
            <p>Your furniture is old.</p>
            <p>Ours is older.</p>
          </div>

          <div className="title">
            <h1>{this.state.product} Products</h1>
            <p>Check out some of our favorite listings</p>
          </div>

          <div className="viewer"></div>

          <div className="title">
            <h1>Browse by Categories</h1>
            <p>Explore by furniture type</p>
          </div>

          <div className="buttons" >
            <button>Seating</button>
            <button>Tables</button>
            <button>Desks</button>
            <button>Bedroom</button>
            <button>Storage</button>
            <button>Misc</button>
          </div>
        </div>
      )
    }
}

export default Home;