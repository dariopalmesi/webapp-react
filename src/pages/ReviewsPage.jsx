import { useParams } from "react-router-dom";
import Banner from "../components/Bannes";
import ReviewsCard from "../components/ReviewsCard";

export default function ReviewsPage() {
    const { id } = useParams();

    const movieReviews = [
        {
            id: 1,
            username: "Federico",
            date: "2022-06-15T20:00:00.000Z",
            review: "Un film straordinario che mi ha emozionato e fatto riflettere.",
            vote: 4
        },
        {
            id: 2,
            username: "Manuel",
            date: "2022-06-16T18:30:00.000Z",
            review: "Una pellicola visivamente spettacolare, con una trama avvincente.",
            vote: 5
        },
        {
            id: 3,
            username: "Giorgia",
            date: "2022-06-17T19:00:00.000Z",
            review: "Il film era interessante, ma la trama a volte un po' lenta.",
            vote: 3
        }
    ];

    return (
        <>
            <Banner title={'Bool Movies'} subtitle={'The nerdest movies commmunity'} leadtext={'lorem ipsum'} />

            <section>
                <div className="container">
                    {movieReviews.map((review) => <ReviewsCard key={review.id} review={review} />)}
                </div>
            </section>
        </>

    )
}