import { useState, useEffect } from "react";
import MoviesCard from "../components/MoviesCard";
import Banner from "../components/Bannes";

export default function MoviesPage() {

    const [movies, setMovies] = useState([]);



    useEffect(() => {
        fetch('http://localhost:3001/movies')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
            })
            .catch(error => console.error('Errore fetch:', error));
    }, []);




    return (
        <>

            <Banner title={'Bool Movies'} subtitle={'The nerdest movies commmunity'} leadtext={'lorem ipsum'} />
            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        {
                            movies.map(movie => (
                                <div className="col" key={movie.id}>
                                    <MoviesCard movie={movie} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}