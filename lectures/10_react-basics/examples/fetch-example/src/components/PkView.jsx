import React from 'react';

const PkView = ({data}) => (
  <>
    <h1>{
      data
      ? `I chose you, ${data.name[0].toUpperCase()}${data.name.slice(1)}!`
      : 'Pkmon not found :('}</h1>
    <img src={data ? data.sprite : ''} alt='' />
  </>
);

export default PkView;
