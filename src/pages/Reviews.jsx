import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const { mediaType, id } = useParams();
  const [review, setReview] = useState(null);

  const getCurrent = async function () {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?api_key=5bc2d8b1a6e814e03b1c29b7fa3a3756`
      );

      const data = await response.data;
      console.log(data);

      setReview(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCurrent();
  }, []);

  if (!review || review.length <= 0) return <p>немає відгуків</p>;

  return (
    <>
      <ul>
        {review.map((el, i) => (
          <li key={i}>
            <h3>{el.author}</h3>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
