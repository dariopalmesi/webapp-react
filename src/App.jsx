import { BrowserRouter, Routes, Route } from "react-router";
// Importa le funzioni principali per la gestione del routing
import AppDefaultLayout from "./layout/AppDefaultLayout.jsx";
// Layout che avvolge le pagine, fornisce struttura e design comuni
import MoviesPage from "./pages/MoviesPage.jsx";
// Pagina principale che mostra una lista di film
import SingleMovies from "./pages/SingleMovies.jsx";
// Pagina per i dettagli di un singolo film
import GlobalContext from "./contexts/GlobalContext.jsx"
import { useState } from "react";

function App() {

  const [loading, setLoading] = useState(false);
  // Inizializza lo stato di caricamento

  const values = {
    loading,
    setLoading
  };


  return (
    <>

      <GlobalContext.Provider value={values}>
        <BrowserRouter>
          {/* Definisce le varie rotte della tua applicazione */}
          <Routes>

            {/* Rotta con layout di default */}
            <Route element={<AppDefaultLayout />}>
              {/* Rotta principale: "/" (homepage) */}
              <Route index element={<MoviesPage />} />
              {/* Rotta dinamica per visualizzare i dettagli di un singolo film */}
              <Route path="movies/:id" element={<SingleMovies />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
      {/* Inizializza il sistema di routing con BrowserRouter */}

    </>
  );
}

export default App;

