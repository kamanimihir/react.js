import { useState } from 'react'

import './App.css'

function App() {
  const [arr, setArr] = useState([])
  const [ischecked, setIschecked] = useState(false)
  const [radio, setRadio] = useState("")

  const handlForm = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const checkboxvalue = ischecked;

    const newobj = {
      name: name,
      email: email,
      password: password,
      checkboxvalue,
      radio,
    }

    setArr([...arr, newobj])

    e.target.reset()
  }


  return (
    <>
      <form action="" onSubmit={handlForm}>
        <input type="text" placeholder='Enter Name' name='name' /><br /><br />
        <input type="email" placeholder='Enter Email' name='email' /><br /><br />
        <input type="password" placeholder='Enter Password' name='password' /><br /><br />


        <input type="checkbox" id='checkbox' checked={ischecked} onChange={() => setIschecked(!ischecked)} />
        <label htmlFor="checkbox">Remember Me</label><br /><br />

        <input type="radio" id='male' name='gender' value="male" checked={radio === "male"} onChange={(e)=>setRadio(e.target.value)} />
        <label htmlFor="male">male</label>


        <input type="radio" id='female' name='gender' value="female" checked={radio === "female"} onChange={(e)=>setRadio(e.target.value)}/>
        <label htmlFor="female">female</label><br />

        <button>Submit</button>
      </form><br /><br />

      {arr.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Password: {item.password}</p>
          <p>checkBox.value:{item.checkboxvalue ? "checked" : "unchecked"}</p>
          <p>radio:{item.radio}</p> 

          <hr />

        </div>
      ))}
    </>
  )
}

export default App
