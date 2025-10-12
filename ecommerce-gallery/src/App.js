import React from "react";
import "./App.css";
import ProductCard from "./productcard";
import ContactForm from "./ContactForm"; // Import the new component
import "bootstrap/dist/css/bootstrap.min.css";
// Don't forget to import Bootstrap's JS if you want its interactive features like navbar toggler
// import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
   const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "₹2,999",
      image: "/img2.png", // This will be replaced by an image
    },
    {
      id: 2,
      name: "Advanced Smart Watch",
      price: "₹3,499",
      image: "/img3.png", // This will be replaced by an image
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: "₹1,999",
      image: "/img4.png", // This will be replaced by an image
    },
    {
      id: 4,
      name: "Ergonomic Gaming Mouse",
      price: "₹999",
      image: "/img5.png", // This will be replaced by an image
    },
    {
      id: 5,
      name: "Professional DSLR Camera",
      price: "₹25,999",
      image: "/img6.png", // This will be replaced by an image
    },
    {
      id: 6,
      name: "High-Speed USB-C Hub",
      price: "₹799",
      image: "/img7.png", // This will be replaced by an image
    },
  ];

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            🛍️ <span className="ms-2 fw-bold">My Awesome Store</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section">Contact</a> {/* Updated href */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero-section text-center text-white py-5 mb-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Discover Our Latest Tech Gadgets!</h1>
          <p className="lead">High-quality electronics at unbeatable prices.</p>
          <a href="#products" className="btn btn-light btn-lg mt-3">Shop Now</a>
        </div>
      </header>

      <div className="container mt-4" id="products">
        <h2 className="text-center mb-5 fw-bold text-primary">Our Featured Products</h2>

        <div className="row g-4">
          {products.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* New Contact Section */}
      <section id="contact-section" className="container my-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8"> {/* Adjust column size for the form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="footer mt-5 py-4 bg-dark text-white text-center">
        <div className="container">
          <p className="mb-0">© 2025 My E-Commerce. All rights reserved.</p>
          <p className="mb-0">by Harshal</p>
        </div>
      </footer>
    </div>
  );
};

export default App;