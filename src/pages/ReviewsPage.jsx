import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "../components/Bannes";
import ReviewsCard from "../components/ReviewsCard";

export default function ReviewsPage() {

    const { id } = useParams();
    const [reviews, setReviews] = useState([]);




    useEffect(() => {
        fetch(`http://localhost:3001/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                setReviews(data.reviews);


            })
            .catch(error => console.error('Errore fetch:', error));
    }, []);




    return (
        <>
            <Banner title={'Bool Movies'} subtitle={'The nerdest movies commmunity'} leadtext={'lorem ipsum'} />

            <section>
                <div className="container">
                    {reviews.map((review) => <ReviewsCard key={review.id} review={review} />)}
                </div>
            </section>
        </>

    )
}