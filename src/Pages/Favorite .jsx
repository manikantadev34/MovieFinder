import "../CSS/Favorites.css"
import { useMovieContext } from "../Context/MovieContext";
import MovieCards from "../Components/MovieCards";
function Favorite(){
    const{favorites}=useMovieContext()
    if(favorites){
        return(
            <div className="favorites" >
                <h2 className="fav" >HeartHub❤️</h2>
            <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCards movie={movie} key={movie.id} />
            ))}
          </div>
          </div>
        )
    }
    return(
        <div className="favorites-empty">
         <h2>No Favorite Movies yet</h2>
        </div>
    )
}

export default Favorite;