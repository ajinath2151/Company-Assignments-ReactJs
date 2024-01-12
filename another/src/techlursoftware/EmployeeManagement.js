import React from "react";
import "../techlursoftware/EmployeeManagementStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPlus } from "@fortawesome/free-solid-svg-icons";

const EmployeeManagement = () => {
  return (
    <section>
      <div className="container-main">
        <h3 className="green">Employee Management</h3>
        <button>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#FFFFFF" }} />
          &nbsp; Add New Employee
        </button>
      </div>
      <div className="container">
        <h3 className="green">Employee List</h3>
      <form action="">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </form>
      </div>
    </section>
  );
};

export default EmployeeManagement;
