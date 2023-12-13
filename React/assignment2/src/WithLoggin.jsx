import React from "react";
import BookList from "./BookList";

const WithLoggin = () => {
  console.log("book list is rendering");
  return <BookList />;
};

export default WithLoggin;
