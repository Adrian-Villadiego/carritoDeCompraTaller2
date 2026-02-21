import React from "react";

// 🔹 Footer definido en el mismo archivo
const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-5 border-top">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="text-muted">
          © Adrian Villadiego - 2026
        </span>

        <div>
          <a href="#" className="text-decoration-none me-3 text-primary">
            <i className="bi bi-info-circle"></i> Ayuda
          </a>
          <a href="#" className="text-decoration-none text-warning">
            <i className="bi bi-shield-lock"></i> Políticas
          </a>
        </div>
      </div>
    </footer>
  );
};

// 🔹 Componente principal
const App = () => {
  return (
  
      <Footer />
  );
};

export default App;