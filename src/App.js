import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import PicsOfTheDay from "./pages/PicsOfTheDay"
import Home from "./pages/Home"
import Mars from "./pages/Mars"
import PicOfDay from "./pages/PicOfDay"

const App = () => {
  return (
    <div className="relative">
      <Header />
      <main className="bg-black text-white">
        <Routes>
          <Route path="/nasa-photos" element={<Home />} />
          <Route path="/pic-of-day" element={<PicOfDay />} />
          <Route path="/pics-of-the-day" element={<PicsOfTheDay />} />
          <Route path="/mars" element={<Mars />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
