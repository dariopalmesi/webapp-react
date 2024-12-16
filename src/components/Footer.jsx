export default function Footer() {
    // Funzione componente che rappresenta il piè di pagina dell'applicazione.

    return (
        <>
            {/* Contenitore principale del footer */}
            <footer className="bg-black text-white pt-5 pb-5">
                {/* 
                Classi principali:
                - `bg-black`: Imposta lo sfondo nero.
                - `text-white`: Colore del testo bianco.
                - `pt-5 pb-5`: Padding superiore e inferiore di 5 unità per creare spazio. 
                */}

                <div className="container">
                    {/* Contenitore per mantenere il contenuto centrato e reattivo. */}

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {/* 
                        Layout a griglia responsivo:
                        - `row`: Crea una riga per il layout a griglia.
                        - `row-cols-1`: Una colonna per riga su schermi piccoli.
                        - `row-cols-sm-2`: Due colonne per riga su schermi medi.
                        - `row-cols-lg-3`: Tre colonne per riga su schermi grandi.
                        */}

                        {/* Colonna 1: Informazioni sul brand */}
                        <div className="col">
                            <h3>Bool Movie</h3>
                            {/* Titolo del brand */}

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            {/* Descrizione breve o slogan */}

                            <div className="d-flex">
                                {/* 
                                Contenitore flessibile per le icone social:
                                - `d-flex`: Dispone gli elementi in riga.
                                - `m-2`: Margine di 2 unità intorno a ciascuna icona.
                                */}
                                <i className="m-2 bi bi-facebook"></i>
                                <i className="m-2 bi bi-twitter"></i>
                                <i className="m-2 bi bi-instagram"></i>
                                {/* 
                                Icone di Bootstrap Icons (Facebook, Twitter, Instagram). 
                                Questi classi richiedono Bootstrap Icons nel progetto.
                                */}
                            </div>
                        </div>

                        {/* Colonna 2: Menu */}
                        <div className="col">
                            <h4>Menu</h4>
                            {/* Titolo della sezione menu */}

                            <ul className="list-unstyled">
                                {/* 
                                Lista non ordinata per i link di navigazione:
                                - `list-unstyled`: Rimuove i punti elenco.
                                */}
                                <li><a href="#" className="text-white">Link 1</a></li>
                                <li><a href="#" className="text-white">Link 2</a></li>
                                <li><a href="#" className="text-white">Link 3</a></li>
                                <li><a href="#" className="text-white">Link 4</a></li>
                                {/* 
                                Link fittizi (href="#") con stile di testo bianco.
                                Questi link possono essere aggiornati per puntare a pagine reali.
                                */}
                            </ul>
                        </div>

                        {/* Colonna 3: Informazioni legali */}
                        <div className="col">
                            <h4>Legal stuff</h4>
                            {/* Titolo della sezione legale */}

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            {/* Descrizione breve (può includere un disclaimer o un'informativa). */}

                            <ul className="list-unstyled">
                                {/* Lista non ordinata per i link legali */}
                                <li><a href="#" className="text-white">Link 1</a></li>
                                <li><a href="#" className="text-white">Link 2</a></li>
                                {/* 
                                Link fittizi con testo bianco, per esempio:
                                - Link alle condizioni d'uso.
                                - Link alla privacy policy.
                                */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
