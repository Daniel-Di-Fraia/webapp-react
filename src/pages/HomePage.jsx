// import comp movie card
import CardMovie from "../components/CardMovie"


//pagina home
const HomePage = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-warning pt-3">Movies</h1>
                <h2 className="text-white pt-2"><i>Best Movies ever</i></h2>
                <div className="row row-cols-4 mt-4 gap-3 justify-content-center">
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                </div>
            </div>
        </>

    )
}

export default HomePage
