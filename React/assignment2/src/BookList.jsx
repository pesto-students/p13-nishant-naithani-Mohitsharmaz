import React, { Component } from "react";
import BookDetail from "./BookDetail";
class BookList extends Component {
  constructor(props) {
    super(props);
  }
books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
    // Add more books if you'd like
  ];
  render() {
    return <>
     <div>
      {this.books.map((item) => {
        return <BookDetail details={item} key={item.title} />;
      })}
    </div>
    </>;
  }
}

export default BookList
