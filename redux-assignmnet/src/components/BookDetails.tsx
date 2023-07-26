import { Link, useNavigate, useParams } from "react-router-dom";

import Loader from "../utils/Loader";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/bookApiSlice";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading } = useGetSingleBookQuery(id);
  const [deleteBook, { isSuccess }] = useDeleteBookMutation();

  const handleDeleteBook = () => {
    const agree = window.confirm("Are you sure you want to delete this book..");
    if (agree) {
      deleteBook(id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book delete successfully...");
      navigate(`/all-books`);
    }
  }, [isSuccess, id, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container py-14">
      <div className="text-end">
        <Link to={`/update-book/${book._id}`}>
          <button className="text-gray-200 rounded px-5 py-1 bg-rose-600 mr-2">
            Edit
          </button>
        </Link>
        <button
          onClick={handleDeleteBook}
          className="text-gray-200 rounded px-5 py-1 bg-gray-900"
        >
          Delete
        </button>{" "}
      </div>
      <div className="md:flex justify-between items-center md:space-x-10">
        <div className="md:h-[500px]  w-full">
          <img className="h-full w-full rounded" src={book?.image} alt="" />
        </div>
        <div className="">
          <h3 className="text-gray-900 text-2xl mb-2 font-medium">
            Title :{book.title}{" "}
          </h3>
          <p className="text-gray-900 text-lg mb-1">Author : {book.author}</p>
          <p className="text-gray-900 text-lg mb-1">Genre : {book.genre}</p>
          <p className="text-gray-900 text-lg mb-1">
            Pubhlication Date : {book.publication_date}
          </p>
          <p className="text-gray-900 text-lg mb-1">
            Description : {book.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
