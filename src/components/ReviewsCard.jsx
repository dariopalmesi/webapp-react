
export default function ReviewsCard({ review }) {
    // 1. Funzione componente che rappresenta una singola recensione.
    // Il componente riceve un oggetto `review` come prop, che contiene i dettagli della recensione.

    // 2. Funzione `stars` per generare le stelle di valutazione.
    const stars = (vote) => {
        const star = []; // Array per memorizzare gli elementi delle stelle.

        // Ciclo per generare 5 stelle (piene o vuote) in base al voto.
        for (let i = 1; i <= 5; i++) {
            if (i <= vote) {
                // Aggiunge una stella piena se il valore di `i` è minore o uguale al voto.
                star.push(<i key={i} className="bi bi-star-fill text-warning me-2"></i>);
            } else {
                // Aggiunge una stella vuota altrimenti.
                star.push(<i key={i} className="bi bi-star text-warning me-2"></i>);
            }
        }

        return star; // Ritorna l'array di elementi delle stelle.
    };

    // 3. Ritorno del componente
    return (
        <div className="reviews card mb-3 bg-warning-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
            {/* Contenitore principale della recensione con classi Bootstrap */}
            {/* `card` per lo stile generale della scheda. */}
            {/* `bg-warning-subtle` per uno sfondo chiaro. */}
            {/* `shadow`, `p-3`, `mb-5` per ombreggiatura e spaziatura. */}
            {/* `rounded` per angoli arrotondati. */}

            <div className="card-body">
                {/* Corpo principale della scheda. */}

                <p>{review.name}</p>
                {/* Mostra il nome della persona che ha scritto la recensione. */}

                <span className="text-muted"><span>{review.text}</span></span>
                {/* Mostra il testo della recensione con uno stile più discreto (`text-muted`). */}

                <p className="date p-2">{review.updated_at}</p>
                {/* Mostra la data di aggiornamento della recensione. */}
                {/* La classe `p-2` aggiunge un po' di padding intorno al testo. */}

                <div className="vote mt-3">
                    {/* Sezione per mostrare il voto. */}
                    <strong>Vote:{stars(review.vote)}</strong>
                    {/* `stars(review.vote)` chiama la funzione `stars` per generare le stelle in base al voto ricevuto. */}
                </div>
            </div>
        </div>
    );
};




