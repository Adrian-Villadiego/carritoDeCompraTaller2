import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient shadow">
      <div className="container">

        {/* Logo y título */}
        <NavLink className="navbar-brand fw-bold" to="/">
          🛒 Carrito de compra
          <br />
          <small style={{ fontSize: "14px" }}>
            Carrito de adrian jsjs
          </small>
        </NavLink>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <i className="bi bi-house-door"></i> Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Articulo" className="nav-link">
                <i className="bi bi-box-seam"></i> Artículo
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Props" className="nav-link">
                <i className="bi bi-envelope"></i> Props
              </NavLink>
            </li>

          </ul>

          {/* Buscador */}
          <form className="d-flex ms-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos..."
            />
            <button className="btn btn-primary" type="submit">
              Buscar
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Header;