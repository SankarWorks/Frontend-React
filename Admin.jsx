import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css"

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", img: "" });
  const [editProductId, setEditProductId] = useState(null);
  const [editProduct, setEditProduct] = useState({ name: "", description: "", price: "", img: "" });

  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");       const data = await response.json();
      setProducts(data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() !== "") {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]); 
    }
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleAddProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        fetchProducts(); 
        setNewProduct({ name: "", description: "", price: "", img: "" }); 
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  
  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchProducts(); 
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  
  const startEditing = (product) => {
    setEditProductId(product.id);
    setEditProduct(product);
  };

  
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleUpdateProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products/${editProductId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editProduct),
      });
      if (response.ok) {
        fetchProducts(); 
        setEditProductId(null);
        setEditProduct({ name: "", description: "", price: "", img: "" }); 
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

 
  const cancelEditing = () => {
    setEditProductId(null);
    setEditProduct({ name: "", description: "", price: "", img: "" });
  };

  return (
    <div className="title">
      <h1>Products</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="add-product">
        <h2>Add New Product</h2>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={newProduct.img}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <div className="product-page">
        <div className="product-list">
          {(searchTerm ? filteredItems : products).map((product) => (
            <div key={product.id} className="product-item">
              {editProductId === product.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={editProduct.name}
                    onChange={handleEditInputChange}
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={editProduct.description}
                    onChange={handleEditInputChange}
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={editProduct.price}
                    onChange={handleEditInputChange}
                  />
                  <input
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    value={editProduct.img}
                    onChange={handleEditInputChange}
                  />
                  <button onClick={handleUpdateProduct}>Save</button>
                  <button onClick={cancelEditing}>Cancel</button>
                </div>
              ) : (
                <div>
                  <Link className="Link" to={`/productdetail/${product.id}`} state={{ product }}>
                    <img src={product.img} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Rs-{product.price}</p>
                  </Link>
                  <button onClick={() => startEditing(product)}>Edit</button>
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
