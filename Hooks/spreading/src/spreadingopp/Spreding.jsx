import React, { useState } from 'react';

export default function Spreding() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        check: false,
        gender: ""
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setData({ ...data, [name]: newValue });
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log(data.name, data.email, data.password, data.check, data.gender);
        setData({
            name: "",
            email: "",
            password: "",
            check: false,
            gender: ""
        });
        e.target.reset();
    };

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <input type="text" placeholder='Enter Name' name='name' value={data.name} onChange={handleChange} /><br /><br />

                <input type="email" placeholder='Enter email' name='email' value={data.email} onChange={handleChange} /><br /><br />

                <input type="password" placeholder='password' name='password' value={data.password} onChange={handleChange} /><br />

                <input type="checkbox" name='check' checked={data.check} onChange={handleChange} id='check' />
                <label htmlFor="check">Terms and Conditions Applied</label><br />

                {/* Replace 'male' and 'female' with strings */}
                <input type="radio" id='male' name='gender' value="male" checked={data.gender === "male"} onChange={handleChange} />
                <label htmlFor="male">Male</label>

                <input type="radio" name="gender" id="female" value="female" checked={data.gender === "female"} onChange={handleChange} />
                <label htmlFor="female">Female</label><br />

                <button>Submit</button>
            </form>
        </>
    );
}
