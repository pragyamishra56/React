// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Learn from "./learn";

// import Now from "./now"

function App() {
  // const [count, setCount] = useState(0)
  const username = "React Developer"
  return (
    <>
      <Learn/>
      <h1>Learning React With Vite library {username}</h1> 
      {/* {username }  can write on here it means to evaluate
       the final outcome or evaluted value/expression of the variable username
      */}
      <p>Test para</p>
    </>
  );
}

/** ***React Fragment: ****
 * is a feature in React that allows 
 * you to return multiple elements from a React
 *  component by allowing you to group a list of children 
 * without adding extra nodes to the DOM.

To return multiple elements from a React component, you'll 
need to wrap the element in a root element. 

function TableData() {
  return (
    <div> or <>
      <td>Eat</td>
      <td>Learn</td>
      <td>Code</td>
    </div> or </>
  );
}

function Table() {
  return (
    <table>
      <tr>
        <TableData />
      </tr>
    </table>
  );
}

*/

export default App;
