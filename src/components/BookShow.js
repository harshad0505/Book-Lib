import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelte, onEdit }) {
  const [first, setfirst] = useState(false);
  const handelDelete = () => {
    onDelte(book.id);
  };
  const handelEdit = () => {
    setfirst(!first);
  };
  let context = book.title;
  if (first) {
    return (
      <BookEdit book={book} onEdit={onEdit} onRight={handelEdit}></BookEdit>
    );
  }
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{context}</div>

      <div className="actions">
        <button className="delete" onClick={handelDelete}>
          Delete
        </button>
        <button className="edit" onClick={handelEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}
