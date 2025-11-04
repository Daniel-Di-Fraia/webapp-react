// import di router-dom per link
import { Link, useParams, useNavigate } from "react-router-dom"

// import state e effetc
import { useState, useEffect } from "react"

// import axios
import axios from "axios"

// import comp singola review
import ReviewCard from "../components/reviewCard"


const MoviePage = () => {

    const [movie, setMovie] = useState();

    // recuperiamo il parametro dinamico
    const { id } = useParams();

    // creiamo istanza di Navigate
    const redirect = useNavigate();

    // prepariamo funzione per la chiamata axios
    const fecthMovie = () => {
        axios.get('http://localhost:3000/movies/' + id)
            .then(response => { setMovie(response.data) })
            .catch(error => {
                console.log(error)
                if (error.status === 404) redirect('/404')
            })
    }

    // faccio partire la chiamata
    useEffect(fecthMovie, []);

    // funzione di generazione istanze reviews
    const renderReviews = () => {
        return movie?.reviews.map(review => {
            return (
                <ReviewCard reviewProp={review} key={review.id} />
            )
        })
    }


    return (
        <>
            <div className="container d-flex justify-content-center gap">
                <section className="pt-5 mb-3 text-white wi">
                    <div className="mb-3">
                        <img className="dim" src={movie?.image} alt={movie?.title} />
                    </div>
                    <h1>{movie?.title}</h1>
                    <h3 className="text-white"><i>By {movie?.director}</i></h3>
                    <p className="p-dim pb-2">{movie?.abstract}</p>
                </section>
                <section>
                    <header className="d-flex justify-content-between mb-4 text-white pt-5">
                        <h4 className="fs-2 text-warning">Our community reviews</h4>
                    </header>
                    {renderReviews()}
                </section>
            </div>
            <footer className="pb-5 container d-flex justify-content-center">
                <Link className="btn btn-warning fs-5" to="/">Back to home</Link>
            </footer>

        </>

    )
}

export default MoviePage





