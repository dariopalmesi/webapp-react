export default function Banner({ title, subtitle, leadtext }) {
    // Funzione componente che rappresenta un banner, utilizzato per mostrare un'intestazione accattivante
    // Riceve tre props: 
    // - `title`: Titolo principale del banner.
    // - `subtitle`: Sottotitolo del banner.
    // - `leadtext`: Testo aggiuntivo in evidenza.

    return (
        // Contenitore principale del banner
        <div className="banner bg-success text-black py-4 mb-5">
            {/* 
            Classi Bootstrap applicate:
            - `bg-success`: Sfondo verde.
            - `text-black`: Colore del testo nero.
            - `py-4`: Padding verticale di 4 unità per creare spazio sopra e sotto il contenuto.
            - `mb-5`: Margine inferiore di 5 unità per separare il banner dagli elementi successivi.
            */}

            <div className="container-lg">
                {/* Contenitore centrale con larghezza limitata per gestire la reattività. 
                - `container-lg`: Un contenitore Bootstrap che si adatta a diverse dimensioni dello schermo.
                */}

                <h1>{title}</h1>
                {/* Mostra il titolo principale del banner, passato come prop `title`. */}

                <h4 className="text-muted">{subtitle}</h4>
                {/* Mostra il sottotitolo in uno stile attenuato grazie alla classe `text-muted`. */}

                <strong className="lead fw-bold">{leadtext}</strong>
                {/* Mostra un testo aggiuntivo in evidenza: 
                - `lead`: Stile Bootstrap che ingrandisce il testo per dargli rilievo.
                - `fw-bold`: Imposta il testo in grassetto per enfatizzarlo ulteriormente.
                */}
            </div>
        </div>
    );
}
