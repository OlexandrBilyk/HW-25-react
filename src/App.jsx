// import { useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <button onClick={() => setCount((prev) => prev + 1)}>
//           count +
//         </button>
//         <button onClick={() => setCount((prev) => prev - 1)}>
//           count -
//         </button>
//         <button onClick={() => setCount(0)}>
//           set to zero
//         </button>
//         <p>{count}</p>
//       </div>
//     </>
//   )
// }

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";

// export default function App() {
//   return (
//     <>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products/:name" element={<Products />} />
//           <Route path="/products" element={<Products />} />
//         </Routes>
//     </>
//   );
// }

// import { Routes, Route, NavLink, Link } from "react-router-dom";
// import styled from "styled-components";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from ".//pages/Products";

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

// export default function App() {
//   return (
//     <div>
//       <nav>
//         <StyledLink to="/" end>
//           Home
//         </StyledLink>
//         <StyledLink to="/about">About</StyledLink>
//         <StyledLink to="/products">Products</StyledLink>
//       </nav>
//       {/* <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/products">Products</Link>
//       </nav> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Cast from "./pages/Cast";
import Reviews from "./pages/Reviews";
import Header from "./components/Header";
import SearchMovie from "./pages/SearchMovie";

export default function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:mediaType/:id" element={<Movies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<SearchMovie />} />
      </Routes>
    </>
  );
}
