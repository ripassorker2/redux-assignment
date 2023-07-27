import { Link, useLocation } from "react-router-dom";
import BookCard from "../../components/BookCard";
import { IBook } from "../../interface/IBook";
import { useGetBooksQuery } from "../../redux/api/bookApiSlice";
import Loader from "../../utils/Loader";
import { useAppSelector } from "../../redux/hooks";

const AllBooks = () => {
  const path = useLocation().pathname;
  const { data: books, isLoading } = useGetBooksQuery("");
  const { user } = useAppSelector((state) => state.user);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container pt-14">
      <div className="flex justify-between">
        <h2 className="text-gray-900 md:text-3xl text-2xl border-b border-rose-600 inline-block">
          All Books
        </h2>
        {user.email && path === "/all-books" && (
          <Link
            to={"/add-book"}
            className="text-gray-200 rounded md:px-5 px-3 py-1 bg-rose-600 "
          >
            Add Book
          </Link>
        )}
      </div>
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
