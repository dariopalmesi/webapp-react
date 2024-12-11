
export default function ReviewsCard({ review }) {




    return (
        <div className="reviews card mb-3">
            <div className="card-body">
                <p>{review.name}</p>
                <span className="text-muted"><span>{review.text}</span></span>
                <p className="date">{review.updated_at}</p>
                <div className="vote mt-3">
                    <strong>Vote:{review.vote}/5</strong>
                </div>
            </div>
        </div>
    )
}