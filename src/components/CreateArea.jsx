import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={changeHandler}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={changeHandler}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
