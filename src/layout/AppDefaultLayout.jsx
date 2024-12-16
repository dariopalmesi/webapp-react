import { Outlet } from 'react-router';
// `Outlet` è un componente di React Router che funge da segnaposto per il contenuto delle rotte annidate.
import Header from '../components/Header';
// Importa il componente `Header` che rappresenta l'intestazione della pagina.
import Footer from '../components/Footer';
// Importa il componente `Footer` che rappresenta il piè di pagina della pagina.

export default function AppDefaultLayout() {
    // Funzione componente che definisce il layout di base per l'applicazione.

    return (
        <>
            {/* Intestazione della pagina */}
            <Header />
            {/* Header è un componente che generalmente include il logo, la navigazione o altri elementi fissi. */}

            {/* Contenuto principale */}
            <main className='bg-secondary pb-4 vh-100 overflow-auto'>
                {/* `bg-secondary`: Classe Bootstrap per impostare uno sfondo grigio secondario. */}
                {/* `pb-4`: Padding-bottom per creare spazio sotto il contenuto. */}
                {/* `vh-100`: Imposta l'altezza dell'elemento al 100% dell'altezza della viewport. */}
                {/* `overflow-auto`: Permette lo scorrimento verticale se il contenuto eccede l'altezza visibile. */}

                <Outlet />
                {/* L'`Outlet` è il punto in cui viene renderizzato il contenuto delle rotte figlie.
                    Ad esempio:
                    - Se la rotta è `/`, verrà mostrato il contenuto di `MoviesPage`.
                    - Se la rotta è `/movies/:id`, verrà mostrato il contenuto di `SingleMovies`.
                */}
            </main>

            {/* Piè di pagina della pagina */}
            <Footer />
            {/* Footer è un componente che generalmente include informazioni come copyright, link utili, o altre note. */}
        </>
    );
}
