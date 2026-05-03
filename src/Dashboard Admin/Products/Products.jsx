import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">

     
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Products & Recipes</h4>

        <button className="btn btn-primary">
          + Add Product
        </button>
      </div>

     
      {loading && (
        <div className="text-center p-3">
          Loading products...
        </div>
      )}

    
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

    
      {!loading && !error && products.length === 0 && (
        <div className="text-center p-3 text-muted">
          No products found
        </div>
      )}

    
      {!loading && !error && products.length > 0 && (
        <div className="card shadow-sm">
          <div className="card-body p-0">

            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Ingredients</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.ingredients}</td>

                    <td>
                      <i className="fa-solid fa-pen-to-square"></i>

                      <i className="fa-regular fa-trash-can"></i>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>
      )}
    </div>
  );
}
