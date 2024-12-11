import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppDefaultLayout from "./layout/AppDefaultLayout.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppDefaultLayout />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
