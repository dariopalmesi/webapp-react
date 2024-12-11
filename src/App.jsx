import { BrowserRouter, Routes, Route } from "react-router"
import AppDefaultLayout from "./layout/AppDefaultLayout.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<AppDefaultLayout />}>

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
