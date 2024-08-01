/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import "./App.css"
// eslint-disable-next-line no-unused-vars
import Card from './components/Card'

function App() {
  // eslint-disable-next-line no-empty-pattern, no-unused-vars
  const [count, setCount] = useState(0);
  // eslint-disable-next-line no-unused-vars
  let myObj = {
    username: "Takimitchi",
    age: 20
  }
  // eslint-disable-next-line no-unused-vars
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="Hanagaki" btnText="click me"/>
      <Card username="Mike" btnText="visit me"/>
    </>
  );
}

export default App;
