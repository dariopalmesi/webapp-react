import { BrowserRouter, Routes, Route } from "react-router"
import AppDefaultLayout from "./layout/AppDefaultLayout.jsx"
import MoviesPage from "./pages/MoviesPage.jsx"
import ReviewsPage from "./pages/ReviewsPage.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppDefaultLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path="movies/:id" element={<ReviewsPage />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
