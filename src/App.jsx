import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./features/layout/components/Header";
import Content from "./features/layout/components/Content";
import Props from "./features/layout/components/Props";
import Footer from "./features/layout/components/Footer";
import Articulo from "./features/layout/components/Articulo";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/props" element={<Props />} />
          <Route path="/articulo" element={<Articulo />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;