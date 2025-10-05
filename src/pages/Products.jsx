import { useParams } from "react-router-dom";

export default function Products() {
  const { name } = useParams();

  return (
    <>
      <p>Products</p>
      {name && <p>{name}</p>}
    </>
  );
}
