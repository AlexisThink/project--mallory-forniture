import React from 'react'
import request from 'superagent'
import './product.css'

class Product extends React.Component{
    constructor(props){
        super(props)

        this.state = {
          image: '',

          name: '',
          price: '',
          condition: '',

          width: '',
          length: '',
          height: '',
        }
    }

componentWillMount(){
  var API = 'https://mallory-furniture-admin.now.sh/api/v1/products'

  request
    .get(API)
    .then(response =>{
      var elementos = response.body
      
      var image

      var name
      var price
      var condition

      var width
      var length
      var height

      elementos.map(elemento =>{
        if(elemento._id === this.props.match.params.id){
          this.setState({
            image: elemento.imageLink,

            name: elemento.item,
            price: elemento.price,
            condition: elemento.condition,

            width: elemento.width,
            length: elemento.length,
            height: elemento.height,
          })
        }
      })
    })
}
    render() {
      return (
        <div className="viewer" >
          <div className="viewer__image" >
            <img src={this.state.image}  />
          </div>
          <div className="viewer__text" >
            <h4 className="viewer__text__name"></h4>
            <p className="viewer__text__price"></p>
          </div>
        </div>
      )
    }
}

export default Product;