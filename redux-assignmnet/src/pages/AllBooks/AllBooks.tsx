import { useLocation } from "react-router-dom";
import BookCard from "../../components/BookCard";
import { IBook } from "../../interface/IBook";
import { useGetBooksQuery } from "../../redux/api/bookApiSlice";
import Loader from "../../utils/Loader";

const AllBooks = () => {
  const path = useLocation().pathname;
  const { data: books, isLoading } = useGetBooksQuery("");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container pt-14">
      <h2 className="text-gray-900 text-3xl border-b border-rose-600 inline-block">
        All Books
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-8 ">
        {path === "/all-books" ? (
          <>
            {books?.map((book: IBook) => (
              <BookCard key={book._id} book={book} />
            ))}
          </>
        ) : (
          <>
            {books?.slice(0, 10).map((book: IBook) => (
              <BookCard key={book._id} book={book} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
