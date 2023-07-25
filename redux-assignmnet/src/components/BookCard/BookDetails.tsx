import { useLoaderData } from "react-router-dom";
import { IBook } from "../../interface/IBook";

const BookDetails = () => {
  const book: IBook = useLoaderData();
  return (
    <div className="container py-14">
      <div className="text-end">
        <button className="text-gray-200 rounded px-5 py-1 bg-rose-600">
          Edit
        </button>{" "}
        <button className="text-gray-200 rounded px-5 py-1 bg-gray-900">
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
