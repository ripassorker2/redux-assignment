import { Link } from "react-router-dom";
import { IBook } from "../../interface/IBook";

// interface BookCardProps {
//   book: IBook;
// }

const BookCard: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <div className="hover:shadow-xl shadow p-3">
      <Link to={`/details/`}>
        <img
          className=" w-full h-52 rounded-lg md:h-60"
          src={book.image}
          alt=""
        />

        <div className="mt-8">
          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            {book.title}
          </h2>
          <p>Author : {book.author}</p>
          <p>Genre : {book.genre}</p>
          <p>Publiucation Date : {book.publication_date}</p>

          <p className="mt-2 text-gray-900 ">{book.description}</p>

          <div className="flex items-center justify-end mt-4"></div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
