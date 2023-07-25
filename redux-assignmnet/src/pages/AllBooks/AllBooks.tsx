import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import { IBook } from "../../interface/IBook";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container pt-14">
      <h2 className="text-gray-900 text-3xl border-b border-rose-600 inline-block">
        All Books
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-8 ">
        {books?.map((book: IBook) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
