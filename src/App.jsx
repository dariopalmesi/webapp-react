import { BrowserRouter, Routes, Route } from "react-router"
import AppDefaultLayout from "./layout/AppDefaultLayout.jsx"
import MoviesPage from "./pages/MoviesPage.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppDefaultLayout />}>
            <Route index element={<MoviesPage />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
