import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = ({ value, onchange, onSubmit }) => {
  return (
    <div className="form container">
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onchange}
          placeholder="search any recipe of your choice"
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default Form;
