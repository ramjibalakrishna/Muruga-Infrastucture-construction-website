import axios from "axios";
import { useEffect, useState } from "react";

function EmployeeCrud() {
  const [_id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setMobile] = useState("");
  const [empsalary, setEmpsalary] = useState("");
  const [employees, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:8000/user/getAll");
    setUsers(result.data.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/user/create", {
        name: name,
        address: address,
        phone: phone,
        empsalary: empsalary,
      });
      alert("Employee Registation Successfully");
      setId("");
      setName("");
      setAddress("");
      setMobile("");
      setEmpsalary("");
      Load();
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  async function editEmployee(employees) {
    setName(employees.name);
    setAddress(employees.address);
    setMobile(employees.phone);
    setEmpsalary(employees.empsalary);

    setId(employees._id);
  }

  async function DeleteEmployee(_id) {
    await axios.delete("http://localhost:8000/user/delete/" + _id);
    alert("Employee deleted Successfully");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "http://localhost:8000/user/update/" +
          employees.find((u) => u._id === _id)._id || _id,
        {
          _id: _id,
          name: name,
          address: address,
          phone: phone,
          empsalary:empsalary,
        }
      );
      alert("Registation Updateddddd");
      setId("");
      setName("");
      setAddress("");
      setMobile("");
      setEmpsalary("");
      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="_id"
              hidden
              value={_id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>Employee Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Employee Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Mobile</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value={phone}
              onChange={(event) => {
              setMobile(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Employee salary</label>
            <input
              type="text"
              class="form-control"
              id="empsalary"
              value={empsalary}
              onChange={(event) => {
              setEmpsalary(event.target.value);
              }}
            />
          </div>

          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>

      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Address</th>
            <th scope="col">Employee Mobile</th>
            <th scope="col">Employee Salary</th>


            <th scope="col">Option</th>
          </tr>
        </thead>
        {employees.map(function fn(employee) {
          return (
            <tbody>
              <tr>
                <th scope="row">{employee._id} </th>
                <td>{employee.name}</td>
                <td>{employee.address}</td>
                <td>{employee.phone}</td>
                <td>{employee.empsalary}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editEmployee(employee)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteEmployee(employee._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            
          );
        })}
      </table>
      <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
   
    
  );
}

export default EmployeeCrud;