import React from 'react';

let id = 0;

const InputBar = (props) => {
  function submit(event) {
    event.preventDefault();
    props.onSubmit(id, document.getElementById('text').value);
    id++;
    document.getElementById('inputbar').reset();
  }

  return (
    <div>
      <form id="inputbar" onSubmit={submit}>
        <input type="text" id="text" placeholder="new note title" />
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
    );
};

export default InputBar;
