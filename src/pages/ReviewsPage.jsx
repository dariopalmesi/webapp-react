import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "../components/Bannes";
import ReviewsCard from "../components/ReviewsCard";

export default function ReviewsPage() {

    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [movies, setMovies] = useState([]);




    useEffect(() => {
        fetch(`http://localhost:3001/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                setReviews(data.reviews);

                setMovies(data);


            })
            .catch(error => console.error('Errore fetch:', error));
    }, []);




    return (
        <>
            <Banner title={movies.title} subtitle={movies.abstract} leadtext={movies.genre} />

            <section>
                <div className="container">
                    {reviews.map((review) => <ReviewsCard key={movies.abstract} review={review} />)}
                </div>
            </section>
        </>

    )
}