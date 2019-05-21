import React, { Component } from 'react'

export class EmployeeList extends Component {
  render() {
    return (
      <div className = "employees">
        {
          this.props.employees.map(employee =>
            <div key ={employee.id}>
              <hr/>
              <h3>Employee: {employee.name}</h3>
            </div>
         )
      }
      <hr/>
      </div>
      
    )
  }
}

export default EmployeeList
