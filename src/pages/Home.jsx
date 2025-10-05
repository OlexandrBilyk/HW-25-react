import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const getTrending = async function () {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=5bc2d8b1a6e814e03b1c29b7fa3a3756"
    );
    const data = await response.data;

    console.log(data);

    setData(data.results);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {data.map((el, i) => (
          <li key={i}>
            <Link to={`movies/${el.media_type}/${el.id}`}>
              {el.title ? el.title : el.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
