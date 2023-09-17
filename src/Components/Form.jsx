import React, { useState } from "react";

const initialUserData = {
    name: "",
    email: ""
}

const Form = (e) => {
    const [userData, setUserData] = useState(initialUserData);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    function validateUser(){
        const {name, email} = userData;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if(name < 5 || !emailRegex.test(email)) throw new Error("Please check the information again.");

        setSuccess(true)
    }
    
    function handleChange(e){
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    function handleSubmit(e){
        e.preventDefault();
        try {
            setError("")
            validateUser();
        } catch (err) {
            setSuccess(false)
            setError(err.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input id="name" name="name" type="text" onChange={handleChange} placeholder="Name" value={userData.name}/>
                <label htmlFor="name"></label>
                <input id="name" name="email" type="text" onChange={handleChange} placeholder="Email" value={userData.email}/>
                <button className="send-btn">Send</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Thanks {userData.name}, we'll contact you via email.</p>}
        </div>
    );
};

export default Form;
