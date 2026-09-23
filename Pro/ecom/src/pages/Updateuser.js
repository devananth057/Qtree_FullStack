import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Updateuser() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        dept: "",
        rollno: ""
    });

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await axios.get(
            `https://6aaa334bff4dd5698b4e2487.mockapi.io/UserTable/${id}`
        );

        setData(res.data);
    };

    const handleChange = ({ target: { value, name } }) => {
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = await axios.put(
            `https://6aaa334bff4dd5698b4e2487.mockapi.io/UserTable/${id}`,
            data
        );

        if (updatedData) {
            navigate('/');
        }
    };

    return (
        <div className="user">

            <form onSubmit={handleSubmit}>

                <h2 style={{ textAlign: "center" }}>
                    Update User
                </h2>

                <div className="mb-3">
                    <label
                        htmlFor="exampleInputName1"
                        className="form-label"
                    >
                        Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputName1"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="exampleInputDept1"
                        className="form-label"
                    >
                        Department
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputDept1"
                        name="dept"
                        value={data.dept}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="exampleInputRoll1"
                        className="form-label"
                    >
                        Roll Number
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputRoll1"
                        name="rollno"
                        value={data.rollno}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Update
                </button>

            </form>

        </div>
    );
}

export default Updateuser;