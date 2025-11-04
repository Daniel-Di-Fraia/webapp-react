// import di router-dom per link
import { Link, useParams } from "react-router-dom"

// import state e effetc
import { useState, useEffect } from "react"

// import comp singola review
import ReviewCard from "../components/reviewCard"


const MoviePage = () => {

    const [movie, setMovie] = useState();

    // recuperiamo il parametro dinamico
    const { id } = useParams();

    


    return (
        <>
            <div className="container pt-5">
                <section className="pt-5 mb-3 text-white">
                    <h1>Titolo Film</h1>
                    <h3 className="text-muted"><i>By Nome regista</i></h3>
                    <p className="pb-4">lorem ipsm dolor sit amet</p>
                </section>
                <section>
                    <header className="d-flex justify-content-between align-items-center mb-4 text-white pt-5">
                        <h4>Our community reviews</h4>
                    </header>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </section>
            </div>
            <footer className="pb-5 container pt-4 d-flex justify-content-end">
                <Link className="btn btn-warning" to="/">Back to home</Link>
            </footer>

        </>

    )
}

export default MoviePage





