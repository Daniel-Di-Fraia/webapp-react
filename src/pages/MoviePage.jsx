// import di router-dom per link
import { Link } from "react-router-dom"

// import comp singola review
import ReviewCard from "../components/reviewCard"


const MoviePage = () => {
    return (
        <>
            <div className="container">
                <section className="pt-5 mb-3 text-white">
                    <h1>Titolo Film</h1>
                    <h3 className="text-muted"><i>By Nome regista</i></h3>
                    <p className="pb-4">lorem ipsm dolor sit amet</p>
                </section>
                <section>
                    <header className="d-flex justify-content-between align-items-center mb-4 text-white pt-4">
                        <h4>Our community reviews</h4>
                    </header>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </section>
            </div>
            <footer className="pb-5 container pt-2 d-flex justify-content-end">
                <Link className="btn btn-warning" to="/">Back to home</Link>
            </footer>

        </>

    )
}

export default MoviePage





