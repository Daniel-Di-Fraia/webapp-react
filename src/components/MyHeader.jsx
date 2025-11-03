// import di router-dom per link
import { Link } from "react-router-dom"

function MyHeader() {


    return (
        <>
            <header className="navbar bg-black">
                <nav className="container-fluid justify-content-center">
                    <Link className="navbar-brand fs-2 text-white" to="/">Movie List</Link>
                </nav>
            </header>
        </>
    )
}

export default MyHeader