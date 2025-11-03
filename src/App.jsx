// import layout
import DefLayout from "./layout/DefLayout"

// import delle pages
import HomePage from "./pages/HomePage"

// import degli elementi React di gestione router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
