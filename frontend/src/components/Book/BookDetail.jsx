import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const id = useParams().id;
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:3001/books/${id}`)
        .then((res) => console.log(res.data));
    };
    fetchHandler();
  }, [id]);
  return <div>BookDetail</div>;
};

export default BookDetail;
