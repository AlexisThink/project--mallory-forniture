import React from 'react'
import request from 'superagent'
import './home.css'

//COMPONENTS
import CardView from '../cardView/CardView'

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
      })
  }

  getSeatingProducts = () =>{
    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'
    this.setState({
      product: 'Seating'
    })

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var seatingList = [];

        productos.map(producto =>{
          if(producto.category === 'seating'){
            seatingList.push(producto);
          }
        })

        this.setState({
          featured: seatingList
        })
      })
  }

  getTablesProducts = () =>{
    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'
    this.setState({
      product: 'Tables'
    })

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var tablesList = [];

        productos.map(producto =>{
          if(producto.category === 'tables'){
            tablesList.push(producto);
          }
        })

        this.setState({
          featured: tablesList
        })
      })
  }

  getDesksProducts = () =>{
    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'
    this.setState({
      product: 'Desks'
    })

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var desksList = [];

        productos.map(producto =>{
          if(producto.category === 'desks'){
            desksList.push(producto);
          }
        })

        this.setState({
          featured: desksList
        })
      })
  }

  getBedroomProducts = () =>{
    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'
    this.setState({
      product: 'Bedroom'
    })

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var bedroomList = [];

        productos.map(producto =>{
          if(producto.category === 'bedroom'){
            bedroomList.push(producto);
          }
        })

        this.setState({
          featured: bedroomList
        })
      })
  }

  getStorageProducts = () =>{
    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'
    this.setState({
      product: 'Storage'
    })

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        var storageList = [];

        productos.map(producto =>{
          if(producto.category === 'storage'){
            storageList.push(producto);
          }
        })

        this.setState({
          featured: storageList
        })
      })
  }

  getMiscProducts = () =>{
    var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'
    this.setState({
      product: 'Misc'
    })

    request
      .get(API)
      .then(response =>{
        var productos = response.body;
        
        var miscList = [];

        productos.map(producto =>{
          if(producto.category === 'miscellaneous'){
            miscList.push(producto);
          }
        })

        this.setState({
          featured: miscList
        })
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

          <div className="viewer">
            {
              this.state.featured.map(producto =>{
               return <CardView image={producto.imageLink} product={producto.item} price={producto.price} />
              })
            }
          
          </div>

          <div className="title">
            <h1>Browse by Categories</h1>
            <p>Explore by furniture type</p>
          </div>

          <div className="buttons" >
            <button onClick={this.getSeatingProducts} >Seating</button>
            <button onClick={this.getTablesProducts} >Tables</button>
            <button onClick={this.getDesksProducts} >Desks</button>
            <button onClick={this.getBedroomProducts} >Bedroom</button>
            <button onClick={this.getStorageProducts} >Storage</button>
            <button onClick={this.getMiscProducts} >Misc</button>
          </div>
        </div>
      )
    }
}

export default Home;