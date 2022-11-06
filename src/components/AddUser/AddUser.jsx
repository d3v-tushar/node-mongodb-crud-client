import React, { useState } from 'react';
import { json } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({});

    //POST Method (Client)
    const handleAddUser = (e) =>{
        e.preventDefault();
        fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){

                alert('User Added Successfully!');
                e.target.reset();
            }
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        console.log(field, value);
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>Display Added Users Here</h2>
            <form onSubmit={handleAddUser}>
                <input onChange={handleInputBlur} type="text" name="name" placeholder='Name' id="" required/>
                <br />
                <input onChange={handleInputBlur} type="text" name="address" placeholder='Address' id="" required/>
                <br />
                <input onChange={handleInputBlur} type="email" name="email" placeholder='Email' id="" required/>
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;