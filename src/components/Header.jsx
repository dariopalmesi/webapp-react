import { NavLink } from "react-router-dom";
// `NavLink` è un componente di React Router che consente di creare link di navigazione, 
// con supporto per applicare stili attivi alla rotta corrente.

export default function Header() {
    // Funzione componente che rappresenta l'intestazione della pagina.

    return (
        // Contenitore principale dell'header
        <header className='bg-warning py-3 px-4 shadow position-sticky'>
            {/* 
            - `bg-warning`: Classe Bootstrap per uno sfondo giallo.
            - `py-3 px-4`: Padding verticale (3 unità) e orizzontale (4 unità) per creare spazio interno.
            - `shadow`: Aggiunge un'ombra per dare profondità al design.
            - `position-sticky`: Rende l'header "appiccicoso", rimanendo visibile nella parte superiore 
              durante lo scorrimento della pagina. 
            */}

            <nav>
                {/* Sezione di navigazione */}
                <NavLink to="/" className='text-decoration-none text-black'>
                    {/* 
                    - `to="/"`: Link che punta alla homepage (radice dell'app).
                    - `text-decoration-none`: Rimuove la sottolineatura dal link.
                    - `text-black`: Imposta il colore del testo a nero.
                    */}
                    <h4>Bool Movies</h4>
                    {/* Titolo del sito o brand name */}
                </NavLink>
            </nav>
        </header>
    );
}
