import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CreateUser() {

    const [user, setUser] = useState([]);

    const gdata = async () => {

        const response = await axios.get(
            `https://6aaa334bff4dd5698b4e2487.mockapi.io/UserTable`
        );

        console.log(response.data);

        setUser(response.data);
    };

    useEffect(() => {
        gdata();
    }, []);

    return (
        <div>

            <table className="table">

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Dept</th>
                        <th scope="col">Roll No</th>
                        
                    </tr>
                </thead>

                <tbody>

                    {
                        user.map((item, index) => {

                            return (
                                <tr key={item.id || index}>

                                    <th scope="row">
                                        {index + 1}
                                    </th>

                                    <td>{item.name}</td>

                                    <td>{item.dept}</td>

                                    <td>{item.rollno}</td>

                                    

                                </tr>
                            );

                        })
                    }

                </tbody>

            </table>

        </div>
    );
}

export default CreateUser;