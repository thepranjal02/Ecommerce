import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Landingpage from './pages/Landingpage'
import Ecart from './pages/Ecart'

import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
    <Route path="/" element={<Landingpage />} />
    <Route path="/ecart" element={<Ecart />} />
      </Routes>
   

      <Footer />

    </BrowserRouter>
  )
}

export default App