
export default function ReviewsCard({ review }) {

    const stars = (vote) => {

        const star = []

        for (let i = 1; i <= 5; i++) {
            if (i <= vote) {
                star.push(<i key={i} className="bi bi-star-fill text-warning me-2"></i>);
            } else {
                star.push(<i key={i} className="bi bi-star text-warning me-2"></i>);
            }
        }

        return star
    }

    return (
        <div className="reviews card mb-3 bg-warning-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
                <p>{review.name}</p>
                <span className="text-muted"><span>{review.text}</span></span>
                <p className="date p-2">{review.updated_at}</p>
                <div className="vote mt-3">
                    <strong>Vote:{stars(review.vote)}</strong>
                </div>
            </div>
        </div>
    )
};



