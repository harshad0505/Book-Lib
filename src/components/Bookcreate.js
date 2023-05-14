import React, { useState } from "react";

export default function Bookcreate({ onCreate }) {
  const [title, settitle] = useState("");

  const handelSumbit = (e) => {
    e.preventDefault();
    onCreate(title);
    settitle("");
  };

  return (
    <div className="book-create">
      <h3>Add A Book</h3>
      <form onSubmit={handelSumbit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <button className="button">Add Book</button>
      </form>
    </div>
  );
}
