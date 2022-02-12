# React
 - [Init React app](#init-react-app)
 - [JSX](#jsx)
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

A React element is a HTML Node object representation with or without childrens.
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
Components let us group the view in separate pieces and render it separately
It is like a JS functions and accept input arguments named **props** this components return a React elements
~~~jsx
// Component using function
const WelcomeComponent = (props) => <h1>Hello, {props.name}</h1>

// Component using Classes
class WelcomeComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
~~~
## Naming
The components names ever to be with a capital letter, this way React can differentiate beetwen html tag and React components

## Render component
Once we have a our components ready, we need to render then and this way React can do update of DOM with elements has ben passed
~~~jsx
const WelcomeComponent = (props) => <h1>Hello, {props.name}</h1>
const element = <WelcomeComponent name="Paula" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);

// Result render
<h1>Hello, Paula</h1>
~~~

## Life cicle and states
When we speak of component life cicle will be refer to events what occurs when React render a component.

[These are](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/):
 - Mounting -> constructor -> render -> update -> componentDidMount
 - Updating -> (new prop, setState(), forceUpdate()) -> render -> update -> componentDidUpdate
 - Unmounting -> componentWillUnmount

~~~jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // Has ben called after render
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  // Has ben called after remove component
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>Actual time is: {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
~~~
These code re-render clock time each 1000ms, updating component status and send then how prop for render it.
This way we can afirm what status can go up from children to parents and props go down from parents to childrens.

> When one component have a internal state it's called stateful component

> Never change state directly use setState() instead, on [hooks](#basic-hooks) we explains how these works

## Events
React handle events very similar of javascript, next will can see a example in a component
~~~jsx
const FromComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Click on submit button!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}
~~~

## Conditional Rendering
Using props or states and the conditionals operators we can chose wath elements we want to render

~~~jsx
const MenuComponent = ({isLogged}) => isLogged ? <UserMenu /> : <GuestMenu />

ReactDOM.render(
  <MenuComponent isLogged={true} />,
  document.getElementById('root')
);
~~~

## Lists
React have the capability of render a index or keys collections (aka: Arrays and Objects) of elements, thanks to methods. Lets see how to do it.

When do a list we need to give a unique key per item, this way React can differentiate one items from others.
~~~jsx
// List from Array
const NumberList = ({numbers}) => {
  const listItems = numbers.map((number) => 
    <li key={number}>There are the {number}</li>);
  return (<ul>{listItems}</ul>);
}

const numbersToList = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbersToList} />,
  document.getElementById('root')
);

// List from Object
const AlumniList = ({alumni}) => {
  const listItems = alumni.map((alumn) =>
  <li key={alumn.id}>{alumn.id}: {alumn.name}</li>)
  return (<ul>{listItems}</ul>)
}

const alumni = [
  {id: 0, name: 'Oscar'},
  {id: 1, name: 'Jessica'}
];
ReactDOM.render(
  <AlumniList alumni={alumni} />,
  document.getElementById('root')
);
~~~

## Style Components
React have a lot of ways to add style to it's components, lets see how do that

> All ways are correct and valid, use or not depend the cuantity of css lines we have or if we want to reuse own components with cahnges in they style

### Style sheets
This way is the most similar to vanilla html-css, we only need to add style sheet how as if html header, and can use css class the same way.

~~~jsx
// style.css
body {
  background-color: antiquewhite;
}
.title {
  color: black;
}
.sub-title {
  font-size: .75em;
}

// component.jsx
import React from 'react';
import './style.css';

export default () => {
  return (
    <>
      <h1 className='title'>My awesome title!</h1>
      <p className='sub-title'>Styled example :3</p>
    </>
  );
};
~~~
### Json style
In this way you can define you css rules in a json and assing then on a variable

~~~jsx
import React from 'react';

export default () => {
  const titleStyle = {
    color: 'black'
  };
  const subtitleStyle = {
    font-size: '.75em'
  }

  return (
    <>
      <h1 style={titleStyle}>My awesome title!</h1>
      <p style={subtitleStyle}>Styled example :3</p>
    </>
  );
};
~~~

### Styled Components
These package let us to define styled components in a very simple way, powerfull and extensible, you can see the compete docs [here](https://styled-components.com/docs)

~~~jsx
// Simple example using styled components
import React from 'react';
import styled from 'styled-components';

export default () => {
  const TitleStyle = styled.h1`
    color: 'black'
  `;
  const SubtitleStyle = styled.p`
    font-size: '.75em'
  `;

  return (
    <>
      <TitleStyle>My awesome title!</TitleStyle>
      <SubtitleStyle>Styled example :3</SubtitleStyle>
    </>
  );
};
~~~

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