import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { TransformationPage } from "./pages/home/TransformationPage";
import { Contact } from "./pages/home/Contact";
import { BuildPage } from "./pages/home/BuildPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transformation" element={<TransformationPage/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/build" element={<BuildPage/>}/>
          <Route path='*' element={<div>Not found</div>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
