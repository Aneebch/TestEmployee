import React, { Component } from "react";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Emploeee UserName</th>
                <th>Employee Emial</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employees) => (
                <tr key={employees.id}>
                  <td>{employees.Name}</td>
                  <td>{employees.UserName}</td>
                  <td>{employees.Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
