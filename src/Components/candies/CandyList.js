import React, { Component } from 'react'

export class CandyList extends Component {
  
getCandyType(candyObj){
 let candyType = this.props.candyTypes.find(type => {
    if( candyObj.typeId === type.id) {
      return true
    } else {
      return false
    }
  })
  return candyType
}
  
  render() {
    return (
      <div className = "candies">
        
        {
          this.props.candies.map(candy =>
            <div key ={candy.id}>
              <hr/>
              <h3>Candy: {candy.name}</h3>
              <h4>Type: {this.getCandyType(candy).name}</h4>
            </div>   
         )
        }
        <hr/>
      </div>
    )
  }
}

export default CandyList
