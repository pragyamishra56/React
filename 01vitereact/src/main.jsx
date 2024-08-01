/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars
function MyApp() {
  return (
    <div>
      <h1>Custom App :::!!!</h1>
    </div>
  )
}

// const ReactElement= {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// eslint-disable-next-line react-refresh/only-export-components
const anotherUser = "Hello "
// eslint-disable-next-line react-refresh/only-export-components
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  anotherUser,
  'click me to visit google'
)

// It is custom react *****
ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp />
    // MyApp()
    // <ReactElement/> isn't right way bcz it's object not a function
    // ReactElement should be write like this bcz it's an object
    // objects are used directly
    anotherElement // it is convert into object

)
