// import di router-dom per link
import { Link } from "react-router-dom"

const ErrorNotFound = () => {
    return (
        <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-white fs-1">Page Not Found</h2>
            <p className="my-3 text-white fs-3">Sorry, but the page you are looking for does not exist.</p>
            <Link className="btn btn-warning fs-4" to="/">Back to home</Link>
        </div>
    )
}

export default ErrorNotFound