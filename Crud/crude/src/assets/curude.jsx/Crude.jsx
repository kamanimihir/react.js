import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Crude() {
  const [isChecked, setChecked] = useState(false)
  const [item, setItem] = useState(()=>{
    const stordData=localStorage.getItem("userData")
    return stordData? JSON.parse(stordData) : []
  })
  const [inputvalue, setInputvalue] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",

  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputvalue({ ...inputvalue, [name]: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setItem([...item, inputvalue])
    console.log(inputvalue)

    // setInputvalue({
    //   name: "",
    //   email: "",
    //   password: "",
    //   gender: "",
    // })
    e.target.reset()
    console.log(isChecked)
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(item))
  }, [item])


  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' name='name' value={inputvalue.value} onChange={handleInput} /><br /><br />
        <input type="email" placeholder='Enter Email' name='email' value={inputvalue.value} onChange={handleInput} /><br /><br />
        <input type="password" placeholder='Enter Password' name='password' value={inputvalue.value} onChange={handleInput} /><br /><br />
        {/* gender */}
        <input type="radio" id='male' name='gender' value='male' onChange={handleInput} />
        <label htmlFor="male">Male</label>
        <input type="radio" id='female' name='gender' value='female' onChange={handleInput} />
        <label htmlFor="female">female</label><br /><br />
        {/* check box */}
        <input
          type="checkbox"
          id='check'
          name='isChecked'
          checked={isChecked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="check">Accept Terms and Conditions!!</label><br /><br />

        <button type='submite'>Add data</button>
      </form>
      <br /><br />
      <table>
        <thead>
          <tr>
            <th>sr no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            item.map((ele, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.password}</td>
                <td>{ele.gender}</td>
                <td><button>edit</button></td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </>
  )
}

