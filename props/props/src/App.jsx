
import './App.css'
import Component1 from './component/Component1'

function App() {
  const fruit = "mango"
  const name = "mihir"
  return (
    <>
      <div>
        <h1>this is my namme</h1>
      </div>
      <Component1 fruit={fruit} name={name} />
    </>
  )
}

export default App
