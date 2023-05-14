import React from "react";
import BookShow from "./BookShow";

export default function BookList({ book, onDelete, onEdit }) {
  const renderBook = book.map((books) => {
    return (
      <BookShow
        book={books}
        key={books.id}
        onDelte={onDelete}
        onEdit={onEdit}></BookShow>
    );
  });
  return <div className="book-list">{renderBook}</div>;
}
