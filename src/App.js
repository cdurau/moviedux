import Header from "./components/Header"
import MoviesGrid from "./components/MoviesGrid"
import Footer from "./components/Footer"
import Watchlist from "./components/Watchlist"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import "./App.css"
import "./styles.css"

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/watchlist">Watchlist</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<MoviesGrid />} />
                        <Route path="/watchlist" element={<Watchlist />} />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App
