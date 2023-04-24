import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import './CreateArea.css'
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event){
    event.preventDefault();
    props.onAdd(note)
    setNote({
      title: "",
      content: "",
    })
  }
  return (
    <>
      <form action="" className="create-note">
        <input
          type="text"
          name="title"
          id=""
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />

        <textarea
          name="content"
          rows="3"
          placeholder="Take a note ..."
          onChange={handleChange}
          value={note.content}
        />
        <div className="button" onClick={submitNote}>
          <AddIcon />
        </div>
      </form>
    </>
  );
}

export default CreateArea;
