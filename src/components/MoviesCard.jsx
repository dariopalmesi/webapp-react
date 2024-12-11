import { Link } from "react-router-dom"

export default function MoviesCard({ movie }) {
    return (
        <>

            <div className="movie card bg-warning-subtle">
                <div className="card-body">
                    <h4>{movie.title}</h4>
                    <span className="text-muted"><span>{movie.director}</span></span>
                    <p className="overview mb-3">{movie.abstract}</p>
                    <p>{movie.genre}</p>
                    <p>{movie.release_year}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-danger">Read more</Link>
                </div>

            </div>

        </>
    )
}