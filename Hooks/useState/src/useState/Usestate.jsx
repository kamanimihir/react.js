import React, { useState } from 'react'

export default function Usestate() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check, setchecked] = useState(false)
  const [gender, setGennder] = useState("")

  function submitForm(e) {
    e.preventDefault();
    console.log(name, email, password, check,gender);
    e.target.reset();
  }

  return (
    <div>
      <h1>Form Usestate</h1>
      <form action="" onSubmit={submitForm}>
        <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="checkbox" id='check' value={check} onChange={(e) => { setchecked(e.target.checked) }} />
        <label htmlFor="check">Terms and Condtions Applied</label><br /><br />
        <label htmlFor="male">male</label>
        <input type="radio" id='male' name='gender' value="male" checked={gender === male} onChange={(e).setGennder(e.target.value)} />
        <label htmlFor="female">female</label>
        <input type="radio" id='fimail' name='gender' value="fimale" checked={gender === fimale} onChange={(e).setGennder(e.target.value)} />
        <button>Submit</button>

      </form>
    </div>
  )
}
