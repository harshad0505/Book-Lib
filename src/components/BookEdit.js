import { useState } from "react";

export default function BookEdit({ book, onEdit, onRight }) {
  const [str, setStr] = useState(book.title);
  console.log(str);
  const handelSum = (e) => {
    e.preventDefault();
    onEdit(book.id, str);

    onRight();
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handelSum}>
        <input
          className="input"
          type="text"
          value={str}
          onChange={(e) => {
            setStr(e.target.value);
          }}
        />
        <button className="button is-primary">Add</button>
      </form>
    </div>
  );
}
