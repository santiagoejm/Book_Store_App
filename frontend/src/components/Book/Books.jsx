import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./book.css";

const URL = "http://localhost:3001/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  console.log(books);
  return (
    <div>
      <ul>
        {books?.map((book) => {
          return (
            <li key={book._id}>
              <Book book={book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Books;
