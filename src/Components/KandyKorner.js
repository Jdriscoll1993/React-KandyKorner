import React, { Component } from 'react'
import NavBar from "./Nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "bootstrap/dist/css/bootstrap.min.css"

class KandyKorner extends Component {
  render() {
      return (
          <React.Fragment>
              <NavBar />
              <ApplicationViews />
          </React.Fragment>
      )
  }
}

export default KandyKorner









// import CandyStores from "./stores/CandyStores"
// import EmployeeList from "./employees/EmployeeList"
// import CandyList from "./candies/CandyList"

// export default class KandyKorner extends Component {
//     storeArray = [
//         { id:1, name: "Sweet Johnson's"},
//         {id:2,name: "Bohon's Candy Works"}
//     ];
//     employeeArray = [
//         {id:1,name: "Kevin Kostnone"},
//         {id:2,name: "Jobin McKinnley"},
//         {id:3,name: "Sally Sweetarts"},
//         {id:4,name: "Allan Aldrige"}
//     ];
//     candyTypeArray = [
//         {id:1,name: "chocolate"},
//         {id:2,name: "fruity stuff"},
//         {id:3,name: "suckers"}
//     ];
//     candyArray = [
//         {id:1,name: "Hershey Kiss",typeId: 1},
//         {id:2,name: "Almond Joy",typeId: 1},
//         {id:3,name: "Lolly-Lol",typeId:3 },
//         {id:4,name: "Sour Skittles",typeId: 2},
//         {id:5,name: "Mike n Ike's",typeId: 2},
//         {id:6,name: "Dum Dum",typeId: 3},
//     ];

//     state = {
//         stores: this.storeArray,
//         employees: this.employeeArray,
//         candyTypes: this.candyTypeArray,
//         candies: this.candyArray
//     }

//     render() {
//     return (
//       <div>
//         <CandyStores stores={this.state.stores} />
//         <EmployeeList employees={this.state.employees}/>
//         <CandyList candies={this.state.candies}
//         candyTypes={this.state.candyTypes}/>
//         {/* candyTypes={this.state.getCandyType()}/> */}
//       </div>
//     )
//   }
// }


