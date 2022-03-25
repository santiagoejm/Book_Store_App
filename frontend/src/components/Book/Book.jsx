import React from "react";

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;

  return <div>{name}</div>;
};

export default Book;
