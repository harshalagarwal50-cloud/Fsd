// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'; // Using react-error-boundary library

// Import your pages
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';

// Import your components
import Navbar from './components/Navbar';
import ErrorFallback from './components/ErrorFallback'; // Your custom fallback UI

// Global styles
// import './styles/App.css';

// Placeholder pages for demonstration (can be simple divs)
const AboutPage = () => (
  <div className="container">
    <h1>About Us</h1>
    <p>We are a passionate team dedicated to sharing interesting stories and knowledge.</p>
  </div>
);
const ContactPage = () => (
  <div className="container">
    <h1>Contact Us</h1>
    <p>Feel free to reach out to us at info@myblog.com.</p>
  </div>
);


function App() {
  return (
    <Router>
      <Navbar /> {/* Navigation bar */}
      <main className="container"> {/* Global container for content */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<BlogPostPage />} />
            {/* Placeholder routes */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
          </Routes>
        </ErrorBoundary>
      </main>
    </Router>
  );
}

export default App;