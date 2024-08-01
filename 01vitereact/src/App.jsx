// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Now from "./now"

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <>
    <h1> React learn with Vite | Pragya </h1>
    <p>wrapping up multiple tags content like h1, p, 
      file contents to return once</p>
      <p>you can also able to return with fragment tags so 
        that is empty tags with this tags you can return multiple tags content
        at once with no error</p>
    <Now/>
    </>
  )
}

export default App
