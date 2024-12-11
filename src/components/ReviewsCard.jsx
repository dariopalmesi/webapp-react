export default function ReviewsCard({ review }) {
    return (
        <div className="reviews card mb-3">
            <div className="card-body">
                <p>{review.review}</p>
                <span className="text-muted">By <span>{review.username}</span></span>
                <p className="date">{review.date}</p>
                <div className="vote mt-3">
                    <strong>Vote:{review.vote}/5</strong>
                </div>
            </div>
        </div>
    )
}