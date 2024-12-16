import { useState } from "react";

export default function FormCardReview({ movie_id, success, setSuccess }) {
    // 1. Dichiarazione degli stati utilizzati nel componente
    const [name, setName] = useState(""); // Stato per il nome dell'utente
    const [text, setText] = useState(""); // Stato per il testo della recensione
    const [vote, setVote] = useState(0);  // Stato per il voto assegnato
    const [errorMessage, setErrorMessage] = useState(null); // Stato per eventuali errori nel form


    // 2. Funzione per mostrare/nascondere il form
    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none');
        // Alterna la classe 'd-none' per mostrare o nascondere il form
    }

    // 3. Funzione per la gestione della sottomissione del form
    function HandleFormSubmit(e) {
        e.preventDefault(); // Impedisce il comportamento predefinito del form (refresh della pagina)

        // Validazione dei campi del form
        if (name.length < 2 || vote == 0 || text.length < 5) {
            setErrorMessage('Please fill out the form correctly'); // Mostra un messaggio di errore se i campi non sono validi
        } else {
            setErrorMessage(null); // Resetta il messaggio di errore se tutto è valido
        }

        // Creazione dei dati da inviare al server
        const formData = {
            name, // Nome inserito dall'utente
            vote, // Voto assegnato
            text  // Testo della recensione
        };

        // URL dell'API per inviare la recensione
        const movie_api_url = `http://localhost:3001/movies/${movie_id}/review`;

        // Invio dei dati al server tramite fetch
        fetch(movie_api_url, {
            method: 'POST', // Metodo HTTP POST per inviare dati
            body: JSON.stringify(formData), // I dati vengono convertiti in formato JSON
            headers: {
                'Content-Type': 'application/json' // Specifica il tipo di contenuto inviato
            }
        })
            .then((res) => res.json()) // Parsing della risposta come JSON
            .then(data => {
                console.log(data); // Debug: mostra i dati della risposta nel console log
                if (data.success) { // Se la risposta conferma il successo
                    setSuccess('Thanks for your review'); // Imposta il messaggio di successo
                    setTimeout(HandleFormToggle, 1000); // Nasconde il form dopo 1 secondo
                    setTimeout(() => setSuccess(null), 3000); // Cancella il messaggio di successo dopo 3 secondi
                }
            }).finally(() => {
                console.log(success); // Debug: controlla lo stato del messaggio di successo
            })
            .catch(err => console.log(err)); // Gestione errori nel caso fallisca la chiamata fetch

        // Resetta i campi del form
        setName('');
        setVote(0);
        setText('');
    }

    // 4. Ritorna il contenuto del componente
    return (
        <div className="container">
            {/* Se success contiene un messaggio, lo mostra */}
            {success && <div>{success}</div>}
            <button onClick={HandleFormToggle} className="btn btn-danger mb-2">Scrivi qui....</button>
            {/* Form inizialmente nascosto con classe 'd-none' */}
            <div id="form-card" className="card mb-4 d-none">
                <div className="card-body">
                    <h3>Inserisci Recensione</h3>
                    {/* Form per inviare la recensione */}
                    <form onSubmit={HandleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name"> Nome</label>
                            {/* Input per il nome */}
                            <input name='name' id='name' type="text" className="form-control" placeholder="Tuo nome"
                                onChange={(e) => setName(e.target.value)} required />
                        </div>

                        {/* Sezione per selezionare il voto tramite stelle */}
                        <div className="rating mb-3 text-warning">
                            {/* Mappa un array di numeri per creare le stelle dinamicamente */}
                            {[1, 2, 3, 4, 5].map(n =>
                                <i key={n}
                                    className={`bi bi-star${n <= vote ? '-fill' : ''} `}
                                    onClick={() => setVote(n)}></i>)
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review"> Recensione</label>
                            {/* Textarea per il testo della recensione */}
                            <textarea className="form-control" name="review" id="review" placeholder="Inserisci qui... "
                                value={text} onChange={(e) => setText(e.target.value)} required></textarea>
                        </div>
                        <div className="mb-3">
                            {/* Bottone per inviare il form */}
                            <button type="submit" className="btn btn-success">Invia</button>
                            {/* Mostra il messaggio di errore se presente */}
                            {errorMessage && <span className="text-danger"><i className="bi bi-x"></i>{errorMessage}</span>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


