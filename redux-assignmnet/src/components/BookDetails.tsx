import { Link, useNavigate, useParams } from "react-router-dom";

import Loader from "../utils/Loader";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/bookApiSlice";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAppSelector } from "../redux/hooks";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
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
      {user.email === book.email && (
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
      )}

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
      <div>
        <div>
          <h2 className="text-gray-900 text-xl border-b mb-2 border-rose-600 inline-block mt-6">
            Give your comment..
          </h2>
          <input
            className="px-4 py-1.5 border border-gray-500 focus:border-gray-800 outline-none rounded-md mb-2 md:w-[400px] block"
            type="text"
            id="review"
            name="review"
            placeholder="write your comment...."
          />
          <button className="text-gray-200 rounded px-5 py-1 bg-rose-600 mr-2 block">
            Submit
          </button>
        </div>
        <div>
          <h2 className="text-gray-900 text-xl border-b border-rose-600 inline-block mt-6">
            Reviews
          </h2>
          <div className="mt-5 mb-5 text-gray-900">
            <div className="flex items-center mb-2">
              <img
                className="h-11 w-11 rounded-full"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
              />
              <h3 className="text-lg ml-3">Ripas Sorker </h3>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
              iusto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
