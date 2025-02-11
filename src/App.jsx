import { Routes,Route } from "react-router-dom";
// import "./App.css";
import"./CSS/Index.css"
import MovieCards from "./Components/MovieCards";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite ";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import NavBar from "./Components/NavBar";
import { MovieProvider } from "./Context/MovieContext";
import MovieDetail from "./Pages/MovieDetails";
import "./CSS/App.css"
function App() {
  
  return (
   
    <MovieProvider>
      <NavBar/>
    <main className="main-content" >
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/movie/:id" element={<MovieDetail />} />

      <Route path="/favorite" element={<Favorite/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/contactus" element={<Contactus/>} />
      {/* <Route path="/moviedetails" element={<Contactus/>} /> */}
    </Routes>

    </main>
    </MovieProvider>
  );
}

export default App;
