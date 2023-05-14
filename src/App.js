import { useEffect, useState } from "react";
import Bookcreate from "./components/Bookcreate";
import BookList from "./components/BookList";
import axios from "axios";

export default function App() {
  const [book, setBook] = useState([]);
  const getData = async () => {
    const res = await axios.get(`  http://localhost:3002/book`);
    console.log(res);
    setBook(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const createBook = async (title) => {
    const res = await axios.post(`http://localhost:3002/book`, { title });
    //console.log(res);
    const $book = [...book, res.data];
    setBook($book);
  };
  const handelDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3002/book/${id}`);
    console.log(res);
    const $book = book.filter((books) => {
      return books.id !== id;
    });
    setBook($book);
  };
  const handelEdit = async (id, newtitle) => {
    // console.log(id, title);
    const res = await axios.put(`http://localhost:3002/book/${id}`, {
      title: newtitle,
    });
    console.log(res.data);
    const $book = book.map((books) => {
      if (books.id === id) {
        return { ...books, ...res.data };
      }
      return books;
    });
    setBook($book);
  };
  //console.log(book);
  return (
    <div className="app">
      <Bookcreate onCreate={createBook} />
      <BookList
        book={book}
        onDelete={handelDelete}
        onEdit={handelEdit}></BookList>
    </div>
  );
}
