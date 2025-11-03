// import di router-dom per link
import { Link } from "react-router-dom"

// creazione componente Header
const CardMovie = () => {
    return (
        <div className="card mb-4">
            <img src="https://pad.mymovies.it/filmclub/2002/06/001/locandina.jpg" alt="poster_movie" />
            <div className="card-body">
                <h5 className="card-title">Titolo:</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quam! Quaerat molestias autem hic neque quia quod asperiores, vel veniam mollitia repellat illo repudiandae praesentium qui deserunt velit adipisci explicabo!
                </p>
                <Link to="movies/1" className="btn btn-primary">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default CardMovie