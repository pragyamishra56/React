function customRender(reactElement, container) {
  /*
  const domElement = document.createElement
  (reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.
    href)
  domElement.setAttribute('target', reactElement.props.
    target)
  
  container.appendChild(domElement)
  */

  const domElement = document.createElement
  (reactElement.type)
  domElement.innerHTML = reactElement.children
  for(const prop in reactElement.props) {
    // if (Object.hasOwnProperty.call(object, prop)) {
    //   const element = object[prop];
    // }
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props
      [prop])
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: 'a',
  props: { // You can add any properties you want inside the props.
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer) // method used to render the react element
// kya inject kru, khaa pr inject kru