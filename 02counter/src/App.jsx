import { useState } from 'react' // hooks 
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Use of React is to updating of UI
  // useState() ye hook apke state ko change krne k liye responsible hai.
  // change state doesn't mean that it will change the value this changes 
  // propagate into your UI means inside the DOM
  // const [count, setCount] = useState(0)
  // Babel  is a JavaScript compiler. It converts ES6 code into ES5 code which can be run in older browsers.

  // let counter = 0

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // console.log("value added: ", Math.random());
    // console.log("clicked", Math.random());
    // console.log("clicked", counter);
    // counter = counter + 1;
    if (counter < 20)
      // counter += 1;
    setCounter(counter + 1)
  }

  const removeValue = () => {
    // console.log("clicked", counter);
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Delete value {counter}</button>
    </>
  )
}

export default App
