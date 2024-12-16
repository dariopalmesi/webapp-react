import { Link } from "react-router-dom";
// `Link` è un componente di React Router che permette la navigazione senza ricaricare la pagina.

export default function MoviesCard({ movie }) {
    // 1. Funzione componente che rappresenta una scheda di un singolo film.
    // Riceve un oggetto `movie` come prop contenente i dettagli del film.

    return (
        <>
            {/* Contenitore principale della scheda del film */}
            <div className="movie card bg-warning-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
                {/* Classe Bootstrap `card` per creare una scheda visivamente accattivante. */}
                {/* Altre classi:
                    - `bg-warning-subtle`: sfondo chiaro per evidenziare il contenuto.
                    - `shadow`: aggiunge un'ombra per migliorare l'estetica.
                    - `p-3`: padding interno di 3 unità.
                    - `mb-5`: margine inferiore per distanziare le schede tra loro.
                    - `rounded`: angoli arrotondati. */}

                <div className="card-body">
                    {/* Corpo principale della scheda contenente i dettagli del film. */}

                    <img src={movie.image} alt="" />
                    {/* Mostra l'immagine del film. */}
                    {/* `src` punta all'URL dell'immagine fornito dall'oggetto `movie.image`. */}
                    {/* `alt` è vuoto qui, ma sarebbe utile aggiungere una descrizione accessibile. */}

                    <h4>{movie.title}</h4>
                    {/* Mostra il titolo del film. */}

                    <span className="text-muted"><span>{movie.director}</span></span>
                    {/* Mostra il nome del regista con uno stile attenuato (`text-muted`). */}

                    <p className="overview mb-3">{movie.abstract}</p>
                    {/* Mostra un riassunto o descrizione breve del film. */}
                    {/* La classe `mb-3` aggiunge uno spazio inferiore per separarlo dagli elementi successivi. */}

                    <p>{movie.genre}</p>
                    {/* Mostra il genere del film (es. "Azione", "Commedia"). */}

                    <p>{movie.release_year}</p>
                    {/* Mostra l'anno di uscita del film. */}

                    <Link to={`/movies/${movie.id}`} className="btn btn-danger">Read more</Link>
                    {/* Bottone per navigare alla pagina dei dettagli del film. */}
                    {/* `to={`/movies/${movie.id}`}`: Crea un URL dinamico basato sull'ID del film. */}
                    {/* Es.: Se `movie.id` è `5`, il link sarà `/movies/5`. */}
                    {/* `className="btn btn-danger"`: Stile di Bootstrap per un pulsante rosso accattivante. */}
                </div>
            </div>
        </>
    );
}
