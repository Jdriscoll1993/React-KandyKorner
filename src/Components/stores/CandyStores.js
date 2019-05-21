import React, { Component } from 'react'

export class CandyStores extends Component {
  render() {
    return (
      <div className = "stores">
       
        {
          this.props.stores.map(store =>
            
            <div key ={store.id}>
              <hr/>
              <h3>Store: {store.name}</h3>
            </div>
         )
      } <hr/>
      </div>
    )
  }
}

export default CandyStores
