import { useParams, useNavigate, Outlet, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Movies() {
  const { mediaType, id } = useParams();
  const [film, setFilm] = useState(null);
  const navigate = useNavigate();

  const getCurrent = async function () {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=5f5a435da6cfebeb42c328b26da6dfd9`
      );

      const data = await response.data;
      console.log(data);

      setFilm(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCurrent();
  }, []);
  if (!film) return <p>Loading</p>;

  return (
    <>
      <section>
        <button onClick={() => navigate(-1)}>go back</button>
        <div style={{ display: "flex", gap: "20px" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
          />
          <div>
            <h3>{film.title}</h3>
            <p>User Score:{((film.vote_average / 10) * 100).toFixed(0)}%</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h3>Genres</h3>
            <ul>
              {film.genres?.map((el, i) => (
                <li key={i}>
                  <p>{el.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <div>
            <Outlet />
          </div>
        </ul>
      </section>
    </>
  );
}
