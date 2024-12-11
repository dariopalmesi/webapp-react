import { Link } from "react-router-dom"

export default function MoviesCard({ movie }) {
    return (
        <>

            <div className="movie card">
                <div className="card-body">
                    <h4>{movie.title}</h4>
                    <span className="text-muted">By <span>{movie.director}</span></span>
                    <p className="overview mb-3">{movie.synopsis}</p>
                    <p>{movie.year}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">Read more</Link>
                </div>

            </div>

        </>
    )
}