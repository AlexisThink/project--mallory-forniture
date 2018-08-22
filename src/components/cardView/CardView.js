import React from 'react'
import './cardView.css'
class CardView extends React.Component{
    render() {
      return (
        <div className="card-view">
          <div className="image-container" >
              <img src={this.props.image} alt="Current Product" />
          </div>

          <div className="texts-container" >
              <h5>{this.props.product}</h5>
              <p>${this.props.price}</p>
          </div>
        </div>
      )
    }
}

export default CardView;