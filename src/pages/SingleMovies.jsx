import { useParams } from "react-router-dom"; // Hook per ottenere i parametri dell'URL
import { useState, useEffect, useContext } from "react"; // Hook per la gestione dello stato e degli effetti
import Banner from "../components/Bannes"; // Componente per mostrare il banner del film
import ReviewsCard from "../components/ReviewsCard"; // Componente per mostrare le recensioni individuali
import FormCardReview from "../components/FormCardReview"; // Componente per aggiungere nuove recensioni
import GlobalContext from "../contexts/GlobalContext"
import Loader from "../components/Loader";

export default function SingleMovies() {

    // 1. Ottieni l'ID del film dai parametri dell'URL
    const { id } = useParams();
    // L'ID sarà estratto dall'URL grazie a `useParams()`. Es.: se l'URL è `/movies/5`, id sarà `5`.

    const { loading, setLoading } = useContext(GlobalContext);
    // 2. Stato per il film
    const [movie, setMovie] = useState({});
    // Lo stato `movie` memorizza i dettagli del film e sarà popolato con i dati ottenuti dall'API.
    const [success, setSuccess] = useState(null); // Stato per il messaggio di successo
    // 3. Effetto per ottenere i dati del film al primo caricamento
    useEffect(() => {

        setLoading(true); // Aggiorna lo stato `loading` a true


        fetch(`http://localhost:3001/movies/${id}`) // Effettua una chiamata fetch al backend usando l'ID
            .then(response => response.json()) // Converte la risposta in formato JSON
            .then(data => {
                setMovie(data); // Aggiorna lo stato con i dati del film ricevuti
                setLoading(false); // Aggiorna lo stato `loading` a false
            })
            .catch(error => console.error('Errore fetch:', error));
        // Gestisce eventuali errori di rete o nel parsing della risposta
    }, [success]); // [] come dipendenza vuota significa che il fetch viene eseguito solo al primo rendering



    // 5. Ritorno del contenuto del componente
    return (
        <>

            {loading ? <Loader /> : (

                <>
                    {/* Componente Banner: mostra titolo, abstract e genere del film */}
                    <Banner title={movie.title} subtitle={movie.abstract} leadtext={movie.genre} />

                    {/* Form per aggiungere una nuova recensione */}
                    <FormCardReview movie_id={id} success={success} setSuccess={setSuccess} />
                    {/* Passa l'ID del film e la funzione per aggiornare i dati */}

                    {/* Sezione per mostrare tutte le recensioni */}
                    <section>
                        <div className="container">
                            {/* Se il film ha recensioni, le mappa e genera un componente per ciascuna */}
                            {movie.reviews && movie.reviews.map((review) =>
                                <ReviewsCard key={review.id} review={review} />)}
                        </div>
                    </section>
                </>
            )}


        </>
    );
}
