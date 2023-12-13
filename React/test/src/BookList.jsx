import React from "react";

const BookList = () => {
  const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
    // Add more books if you'd like
  ];
  return (
    <div>
      {books.map((item) => {
        return <li style={{background:"grey", color:"white", border:"1px solid red", margin:"2rem", textDecoration:"none" , listStyleType:"none"}}>
            <h1>{item.title}</h1>
            <p>{item.author}</p>
            <p>{item.year}</p>
        </li>;
      })}
    </div>
  );
};

export default BookList;
