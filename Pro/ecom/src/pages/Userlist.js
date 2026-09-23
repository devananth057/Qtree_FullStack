import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Userlist() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      'https://6aaa334bff4dd5698b4e2487.mockapi.io/UserTable'
    );

    console.log(res.data);
    setUser(res.data);
  };
   
  const handleDelete = async (id) => {
    await axios.delete(
      `https://6aaa334bff4dd5698b4e2487.mockapi.io/UserTable/${id}`
    );

    getData();
  };

  

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Rollno</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.rollno}</td>
              <td>{item.dept}</td>
              <td>
                <Link to={`/edit/${item.id}`}>Edit</Link>
                
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userlist;