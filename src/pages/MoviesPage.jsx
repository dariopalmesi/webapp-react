import MoviesCard from "../components/MoviesCard";
import Banner from "../components/Bannes";

export default function MoviesPage() {

    const movies = [
        {
            id: 1,
            title: 'Book Title 1: The Movie',
            director: 'Unknown Director 1',
            synopsis: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam.',
            year: 2023
        },
        {
            id: 2,
            title: 'The Great Gatsby',
            director: 'Baz Luhrmann',
            synopsis: 'Gatsby, un uomo ricco e affascinante, sogna di tornare indietro nel tempo per essere con l\'amata Daisy...',
            year: 2013
        },
        {
            id: 3,
            title: '1984',
            director: 'Michael Radford',
            synopsis: 'Un mondo distopico dove Winston Smith cerca di opporsi al regime totalitario del Grande Fratello.',
            year: 1984
        },
        {
            id: 4,
            title: 'Il Signore degli Anelli: La Compagnia dell\'Anello',
            director: 'Peter Jackson',
            synopsis: 'Un viaggio epico per salvare la Terra di Mezzo dalla minaccia di Sauron e del suo Anello del Potere.',
            year: 2001
        },
        {
            id: 5,
            title: 'Il Nome della Rosa',
            director: 'Jean-Jacques Annaud',
            synopsis: 'Un frate francescano indaga su un omicidio misterioso in un monastero medievale.',
            year: 1986
        },
        {
            id: 6,
            title: 'The Catcher in the Rye: Un Sogno Americano',
            director: 'Adaptation Pending',
            synopsis: 'Un giovane cerca di affrontare la realtà della vita adulta mantenendo la sua innocenza e libertà.',
            year: 2024 // Ipotesi per un adattamento futuro
        },
        {
            id: 7,
            title: 'Il Padrino',
            director: 'Francis Ford Coppola',
            synopsis: 'La saga della famiglia mafiosa Corleone e il suo coinvolgimento nella criminalità organizzata.',
            year: 1972
        },
        {
            id: 8,
            title: 'Il Giro del Mondo in 80 Giorni',
            director: 'Frank Coraci',
            synopsis: 'Un’avventura straordinaria per dimostrare che tutto è possibile con coraggio e determinazione.',
            year: 2004
        },
        {
            id: 9,
            title: 'La Divina Commedia: Inferno',
            director: 'Adaptation Pending',
            synopsis: 'Il viaggio epico di Dante attraverso Inferno, Purgatorio e Paradiso.',
            year: 2025 // Ipotesi per un progetto cinematografico futuro
        },
        {
            id: 10,
            title: 'Sherlock Holmes',
            director: 'Guy Ritchie',
            synopsis: 'Il detective più famoso al mondo risolve misteri complessi con l\'aiuto di Irene Adler.',
            year: 2009
        }
    ];

    return (
        <>

            <Banner title={'Bool Movies'} subtitle={'The nerdest movies commmunity'} leadtext={'lorem ipsum'} />
            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        {
                            movies.map(movie => (
                                <div className="col" key={movie.id}>
                                    <MoviesCard movie={movie} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}