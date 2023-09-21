import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Form() {
  const options = ['Author 1', 'Author 2', 'Author 3', 'Author 4'];

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form action="">
        <input type="text" placeholder="Book Title" />
        <Dropdown options={options} value="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
}

export default Form;
