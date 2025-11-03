// import di router-dom per link
import { Link } from "react-router-dom"

function MyHeader() {


    return (
        <>
            <header className="navbar bg-body-tertiary mb-4">
                <nav className="container-fluid justify-content-start">
                    <Link className="navbar-brand" to="/">Movie List!!</Link>
                </nav>
            </header>
        </>
    )
}

export default MyHeader