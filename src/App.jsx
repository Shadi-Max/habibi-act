import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Videos from './pages/Videos';


function App() {

  return (
      <>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </Router>
      </>
  )
}

export default App
