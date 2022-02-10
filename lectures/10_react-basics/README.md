# React
 - [Init React app](#init-react-app)
 - [JSX](#jsx)
 - [Elements]()
 - [Components]()
   - [Naming]()
   - [Life cicle]()
   - [Functional components]()
   - [Class components]()
   - [fragments]()
   - [Events]()
   - [Lists]()
   - [Style Components]()
     - [Style sheets]()
     - [CSS modules]()
 - [Props & States]()
 - [Conditional Rendering  ]()
 - [Basic Hooks]()
   - [useState]()
   - [useEffect]()
   - [useContext]()
 - [Custom Hooks]()
 - [Memo]()
 - [Rutes]()
 - [Fetch data]()
 - [Froms]()

# Init React app
Before init a new React app, we need to install the package [create react app](https://create-react-app.dev/) via npm
~~~bash
npm i -g create-react-app
~~~
Now can init new project via npx
~~~bash
# This command do a new dir called projectName and init new React app inside
npx create-react-app {{projectName}}
~~~
# JSX
Is a javascript extension created by Facebook to used it how preprocessor to mix HTML sintax and javascript to optain React elements, to after render it on a component.

> Use JSX is not mandatory but recomended

A React element is a HTML Node with or without children.
~~~jsx
// Basic element
const element = (
  <div>
    <h1>Hi! i'm a element</h1>
  </div>
);

// Element using React.createElement
const element = React.createElement(
  'HtmlTag',
  {attributes},
  'TextNode' || [elementsArray]
);

// Element with children
const hElement = React.createElement(
  'h1',
  {},
  'Awesome title!'
);

const aElement = React.createElement(
  'a',
  {href: link.url},
  'Click to see more!'
);

const divElement = React.createElement(
  'div',
  {},
  [hElement, aElement] 
);
~~~
In these elements we can use curly braces {} to embed javascript expresions on HTML tags in the nex way
~~~jsx
const name = 'world!';
<h1>Hello, {name}</ h1>
// You can use {} to add attributes dinamically
<img src={image.url}></img>
~~~
# Components
## Naming
## Life cicle
## Functional components
## Class components
## fragments
## Events
## Lists
## Style Components
### Style sheets
### CSS modules
# Props & States
# Conditional Rendering
# Basic Hooks
## UseState
## UseEffect
## UseContext
# Custom Hooks
# Memo
# Rutes
[React router](https://v5.reactrouter.com/web/api/Hooks)
# Fetch data
# Froms 
[React hook form](https://react-hook-form.com/)