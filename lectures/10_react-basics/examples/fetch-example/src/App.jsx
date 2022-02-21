import { useState } from 'react';
import fetchAPI from './utils/fetchAPI';
import PkView from './components/PkView'
import Form from './components/Form';

const App = () => {
  const [data, setData] = useState();

  const handleSubmit = (event) => {
    const {target: {0: {value}}} = event;

    event.preventDefault();
    fetchAPI(value.toLowerCase().trim(), setData)
  };

  return (
    <>
      {
        data === undefined 
        ? <h1>Write a Pokemon name.</h1> 
        : <PkView data={data} />
      }
      <br />
      <Form handleSubmit={handleSubmit} />
    </>
  );
};

export default App;
