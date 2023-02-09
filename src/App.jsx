import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path='*' element={<div>Not found</div>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
