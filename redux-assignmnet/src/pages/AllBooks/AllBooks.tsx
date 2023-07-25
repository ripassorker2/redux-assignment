import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import { IBook } from "../../interface/IBook";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container px-4 ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-8 mt-14">
        {books?.map((book: IBook) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
