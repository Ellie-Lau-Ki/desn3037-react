import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route exact path="about" element={<About />} />
          <Route exact path="clients" element={<Clients />} />
          <Route exact path="contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
