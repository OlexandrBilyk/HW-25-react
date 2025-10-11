import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

export default function SearchMovie() {
  const [searched, setSearched] = useState(null);
  const [value, setValue] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const getCurrent = async (query) => {
    if (!query?.trim()) return;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=5f5a435da6cfebeb42c328b26da6dfd9&query=${query}`
      );

      setSearched(response.data.results);
      setSearchParams({ query });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;

    setValue(query);
    getCurrent(query);
  }, [searchParams]);
  return (
    <section>
      {searched ? (
        <ul>
          {searched.map((el, i) => (
            <li key={i}>
              <Link to={`${el.media_type}/${el.id}`}>
                {el.title ? el.title : el.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter words"
          />
          <button
            type="button"
            onClick={() => {
              getCurrent(value);
            }}
          >
            Search
          </button>
        </div>
      )}
    </section>
  );
}
