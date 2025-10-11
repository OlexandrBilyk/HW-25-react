import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Cast() {
  const { mediaType, id } = useParams();
  const [cast, setCast] = useState(null);

  const getCurrent = async function () {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=5f5a435da6cfebeb42c328b26da6dfd9`
      );

      const data = await response.data;
      console.log(data);

      setCast(data.cast);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCurrent();
  }, []);

  return (
    <>
      <ul>
        {cast &&
          cast.map((el, i) => (
            <li key={i}>
              <img
                src={`https://image.tmdb.org/t/p/w185/${el.profile_path}`}
                alt={el.name}
              />
              <p>Name: {el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
