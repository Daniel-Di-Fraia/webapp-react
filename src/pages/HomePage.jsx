// import comp movie card
import CardMovie from "../components/CardMovie"


//pagina home
const HomePage = () => {
    return (
        <>
            <h1 className="text-warning">Movies</h1>
            <h2><i>Best Movies ever</i></h2>
            <div className="row row-cols-3 mt-4">
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
            </div>
        </>

    )
}

export default HomePage
