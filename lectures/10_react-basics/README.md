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
The components names ever to be with a capital letter, this way React can differentiate between html tag and React components

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

These code re-render clock time each 1000ms, updating component status and send then how prop to render it.
In this way we can affirm that states can go up from children to parents and props go down from parents to childrens.

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
Using props or states and the conditionals operators we can choose what elements we want to render

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
In this way you can define you css rules in a json and assign then on a variable

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
These package let us to define styled components in a very simple way, powerfull and extensible, you can see the complete docs [here](https://styled-components.com/docs)

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
Hooks in React allow us use states and other features of components without class dependences.

It's help us to write more simple components avoid in the way the wrappers hell.

And it opens up the posibility of split components in smaller function to make more easy mantein and scale these components.

> ## [The rules](https://reactjs.org/docs/hooks-rules.html):
> - The hooks only ben called at the top level, these means they cannot be used inside loop, conditions or on nested functions
>
> - You can only use a hook in React components

You can see all hooks reference [here](https://reactjs.org/docs/hooks-reference.html)

## UseState
Add a local state in a component, these state is preservet between re-renders.

useState return a value, one update function and we can provite a one initial state

~~~jsx
// useState declaration
const [value, funtionToUpdateValue] = useState(initialValue);

// Simple implementation of useState
import React, { useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count++)}>
        Click me!
      </button>
    </>
  );
}
~~~

## UseEffect
These hooks can do the work of life cycle events (Mount, update, UnMount) but implemented in one API

~~~jsx
// Use useEffect like componentDidUpdate
import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // Now each time wen state count is update the document title too
  useEffect(() => document.title = `You clicked ${count} times`;)

  return (
    <>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count++)}>
        Click me!
      </button>
    </>
  );
}
~~~

## UseContext
This hook, links components what use it with a one context and when the value of context provider changes this trigger a re-render on components

~~~jsx
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    // If the provider value changes, we trigger a ThemedButton re-render
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);  
  
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
~~~

# Routes
The [React router](https://v5.reactrouter.com/core/guides/quick-start) let us split our code between defined paths, also allows us do a static or nested routes

## Installation
We will recurre to npm for install React router, in this way.

~~~bash
# In the next examples we use a React Router v5
npm install react-dom react-router-dom@^5
~~~

## Browser Router
When we want to use a Route, we need to nest in a `<BrowserRouter />` component. This component keep the history and state of our rutes.

This component have some optional props we can use:

~~~jsx
<BrowserRouter 
  basename={String}
  forceRefresh={Boolean}
  getUserConfirmation={Function}
>
  <ComponentNested />
</BrowserRouter>
~~~

### `basename`
This prop let us to define one path before of destiny path, this help us to agroup a certains paths under one same origin.

~~~jsx
<BrowserRouter basename="/calendar">
    <Link to="/today"/> // render <a href="/calendar/today">
    <Link to="/tomorrow"/> // render <a href="/calendar/tomorrow">
    ...
</BrowserRouter>
~~~

### `forceRefresh`
When we use this flag, React do a re-render of page, every time what user navigate to other route.

### `getUserConfirmation`
Allow us use a function to ask a confirmation to user when he want change to other route.

~~~jsx
<BrowserRouter
  getUserConfirmation={(message, callback) => {
    // This is the default behavior
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}
/>
~~~

## Route
This component render the nested component if the path of Route matches the path required by the user, like this.

~~~jsx
<Router>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/profile">
    <UserProfile />
  </Route>
</Router>
~~~

## Link
These component render an anchor and can use to navigate over our app, we can use 'to' prop with a string, object or function.
But i'm only going to show the first two cases.

~~~jsx
// to: String
<Link to="/items?sort=name">See items</Link>

// to: Object
<Link to={{
  pathname: "/items",
  search: "?sort=name",
  hash: "#Hash",
  state: { isLogin } // we can use to persist one state to destiny
}}>See items</Link>
~~~

## Switch
Renders the first Route or Redirect that matches with destiny path

~~~jsx
<Router>
  <Switch>
    <Route path="/" component={HomePage}>
    <Route path="/user/profile" component={UserProfile}>
    <Route component={NotFound}>
  </Switch>
</Router>
~~~

## Code examples 
 - [Router basics](./examples/router-basics/)
 - [Nested routes](./examples/nested-routes/)
 - [Route redirect](./examples/redirect-basics/)
 - [Route no match](./examples/404-example/)

# Forms 
In react we have various ways to implement a form.
 - Stateless component
 - Stateful component
 - Stateful and aid from a package like a [React hook form](https://react-hook-form.com/)

## Form via stateless component
We can use React.useRef() hook to persist a reference of one HTMLnode of the DOM.
This way the component not have a internal state, this mean we can't validate the fields automatically when change it's values or access these values from other parts of our app.

~~~jsx
// Anatomy of useRef
import { useRef } from 'react';

const ref = useRef(optionalInitialValue);
/*
Now can access to ref like a object
ref = {
  current: refValue
}
*/
~~~

How useRef() only binds one HTMLnode if our form have a multiple inputs that we want to read, we need to do a useRef for each node to bind or bind the parent node and destructure the desired nodes, let's see an example.

~~~jsx
const FormComponent = () => {

  const formRef = useRef();

  const handleSubmit = (event) => {
    const [name, mail] = formRef.current;

    event.preventDefault();
    console.log(`
      Name: ${name.value}
      Mail: ${mail.value}
    `)
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} >
      <label>
      Name:
      <input name="name" type="text" />
      <label>
      <label>
      Mail:
      <input name="mail" type="text" />
      <label>
      <br />
      <button type="submit" value="Submit" />
    </form>
  )
}
~~~

## Form via stateful component
The principal benefit of use a stateful form component, is allow to validate the inputs fields in real time and the possibility to share it's state in our app.

Let's see a simple example:

~~~jsx
const FormComponent = () => {
  const [inputs, setInputs] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Info to send:');
    console.log(inputs);
  }

  const handleChange = ({target}) => {
    const [name, value] = target;

    setInputs({ [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" onChange={handleChange} value={input.name} />
      </label>
      <label>
        Mail:
        <input name="mail" type="text" onChange={handleChange} value={input.mail} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
~~~

## Form via React Hook Form package
This type of package aid us to make forms more simple, given to us a tools to manage events, state and validations of our form.
Let's see a simple use case:

First we need to install the package from npm.

~~~bash
npm install react-hook-form
~~~

And imports custom hook of package in to our code.

~~~jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } }  = useForm();

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register("name", { required: true })} />
        {errors.name?.type === 'required' && 'Name is required.'}
      </label>
      <label>
        Mail:
        <input {...register("mail", { required: true })} />
        {errors.mail?.type === 'required' && 'Mail is required.'}
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default FormComponent;
~~~

# Fetch data
When we desire load data from external location, we can require then through a external library or use web API [fetch](https://developer.mozilla.org/en/docs/Web/API/fetch) or [XMLHttpRequest](https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest).

Below you can see a simple example. But [here](./examples/fetch-example) i leave a functional example.

~~~jsx
// Fech example
const fetchData = () => 
  fetch(`url`)
    .then((response) => response.json())
    .then((data) => /* Do stuff */)
    .catch((error) => /* Handle error */)

// XMLHttpRequest example
const newXHR = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `url`, true);
    xhr.onloadend = () => /* Do stuff */;
    xhr.onerror = () => /* Handle error */;
    xhr.send();
};
~~~
