import { BrowserRouter, Routes, Route } from "react-router"
import AppDefaultLayout from "./layout/AppDefaultLayout.jsx"
import MoviesPage from "./pages/MoviesPage.jsx"
import SingleMovies from "./pages/SingleMovies.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppDefaultLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path="movies/:id" element={<SingleMovies />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
