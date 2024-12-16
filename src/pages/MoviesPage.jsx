import { useState, useEffect, useContext } from "react"; // Hook per gestire lo stato e gli effetti
import MoviesCard from "../components/MoviesCard"; // Componente per rappresentare la scheda di un film
import Banner from "../components/Bannes"; // Componente per il banner nella parte superiore della pagina
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader";

export default function MoviesPage() {
    // 1. Stato per memorizzare l'elenco dei film
    const [movies, setMovies] = useState([]);
    // `movies` inizialmente è un array vuoto. Verrà popolato con i dati ricevuti dal server.
    const [loading, setLoading] = useState(false);
    // `loading` inizialmente è false. Verrà impostato a true quando viene effettuata la chiamata fetch e a false quando termina.

    // 2. Effetto per caricare i film all'avvio del componente
    useEffect(() => {

        setLoading(true); // Imposta il valore di `loading` a true


        fetch('http://localhost:3001/movies') // Effettua una chiamata fetch per ottenere la lista dei film
            .then(response => response.json()) // Converte la risposta in formato JSON
            .then(data => {
                setMovies(data); // Aggiorna lo stato con i dati ricevuti
                setLoading(false); // Imposta il valore di `loading` a false

            })
            .catch(error => console.error('Errore fetch:', error));
        // Gestione degli errori in caso di fallimento della richiesta
    }, []);
    // [] come dipendenza vuota significa che il fetch verrà eseguito solo al primo caricamento del componente

    // 3. Ritorno del contenuto del componente
    return (
        <>

            {loading ? <Loader /> : (


                <>

                    {/* Banner nella parte superiore della pagina */}
                    <Banner
                        title={'Bool Movies'} // Titolo del banner
                        subtitle={'The nerdest movies commmunity'} // Sottotitolo
                        leadtext={'lorem ipsum'} // Testo aggiuntivo o descrizione
                    />
                    {/* Sezione che mostra i film */}
                    <section className="py-5 ">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                                {/* Mappa l'elenco dei film e genera una MoviesCard per ciascuno */}
                                {
                                    movies.map(movie => (
                                        <div className="col" key={movie.id}>
                                            {/* Componente MoviesCard che riceve un film come prop */}
                                            <MoviesCard movie={movie} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

                </>

            )}

        </>
    );
}
