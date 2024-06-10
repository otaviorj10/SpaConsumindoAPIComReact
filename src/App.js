import { Header } from "./components/Header"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; // importação para rotas
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { MovieDetails } from "./Views/MovieDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {<Route path="/about"
            element={<About />} />
          }

          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/" element={
            <Home />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
