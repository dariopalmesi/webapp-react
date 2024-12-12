import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "../components/Bannes";
import ReviewsCard from "../components/ReviewsCard";

export default function SingleMovies() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});




    useEffect(() => {
        fetch(`http://localhost:3001/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                setMovie(data);


            })
            .catch(error => console.error('Errore fetch:', error));
    }, []);




    return (
        <>
            <Banner title={movie.title} subtitle={movie.abstract} leadtext={movie.genre} />

            <section>
                <div className="container">
                    {movie.reviews && movie.reviews.map((review) => <ReviewsCard key={review.id} review={review} />)}
                </div>
            </section>
        </>

    )
}