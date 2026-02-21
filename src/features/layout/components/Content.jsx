import React from "react";

export const Content = () => {

  // 🔹 Lista de productos
  const productos = [
    {
      id: 1,
      nombre: "Audífonos Bluetooth",
      precio: 159900,
      stock: 10,
      imagen:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
    },
    {
      id: 2,
      nombre: "Teclado Mecánico",
      precio: 249000,
      stock: 3,
      imagen:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      id: 3,
      nombre: "Smartwatch Deportivo",
      precio: 329000,
      stock: 0,
      imagen:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    },
    {
      id: 4,
      nombre: "Mouse Inalámbrico",
      precio: 49900,
      stock: 7,
      imagen:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
  ];

  // 🔹 Función para mostrar estado del stock
  const estadoStock = (stock) => {
    if (stock === 0)
      return <span className="badge bg-secondary">Agotado</span>;

    if (stock <= 3)
      return (
        <span className="badge bg-warning text-dark">
          Pocas unidades
        </span>
      );

    return <span className="badge bg-success">En stock</span>;
  };

  return (
    <div className="container my-5">
      <div className="row">
        
        {/* LISTA DE PRODUCTOS */}
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="fw-bold">Productos</h3>
            <span className="text-muted">
              Mostrando {productos.length} productos
            </span>
          </div>

          <div className="row">
            {productos.map((producto) => (
              <div key={producto.id} className="col-md-6 mb-4">
                <div className="card shadow-sm h-100 border-0">
                  <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt={producto.nombre}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      {producto.nombre}
                    </h5>
                    <p className="fw-bold text-primary">
                      COP ${producto.precio.toLocaleString()}
                    </p>
                    {estadoStock(producto.stock)}
                  </div>
                  <div className="card-footer bg-white border-0 d-flex justify-content-between">
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-pencil"></i> Editar
                    </button>
                    <button className="btn btn-outline-danger btn-sm">
                      <i className="bi bi-trash"></i> Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="col-lg-4">
          <div className="card shadow border-0">
            <div className="card-header bg-primary text-white fw-bold">
              Agregar producto
            </div>
            <div className="card-body">
              
              <div className="mb-3">
                <label className="form-label">Nombre del producto</label>
                <input type="text" className="form-control" />
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Precio (COP)</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">Stock</label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="mb-3 mt-3">
                <label className="form-label">Categoría</label>
                <select className="form-select">
                  <option>Selecciona una categoría</option>
                  <option>Accesorios</option>
                  <option>Computadores</option>
                  <option>Audio</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">URL de imagen</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea className="form-control"></textarea>
              </div>

              <div className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <i className="bi bi-cart-plus"></i> Agregar
                </button>
                <button className="btn btn-outline-secondary">
                  Limpiar
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Content;