import React from "react";

const Form = ({handleSubmit}) => (
  <>
    <form onSubmit={handleSubmit}>
      <label>
        Chose a Pokemon:
        {" "}
        <input type="text" />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </>
);

export default Form;