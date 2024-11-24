import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div key={movie._id} className="relative group m-[1rem]">
      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.image}
          alt={movie.name}
          className="w-[8rem] h-[4rem] sm:w-[8rem] sm:h-[8rem] md:w-[12rem] md:h-[12rem] lg:w-[16rem] lg:h-[16rem] xl:w-[20rem] xl:h-[20rem] rounded m-0 p-0 transition duration-300 ease-in-out transform group-hover:opacity-50"
          />
      </Link>

      <p className="absolute top-[85%] left-[2rem] right-0 bottom-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        {movie.name}
      </p>
    </div>
  );
};

export default MovieCard;
