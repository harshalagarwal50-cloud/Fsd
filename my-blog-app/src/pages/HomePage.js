// src/pages/HomePage.js
import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import blogPosts from '../data/blogPosts'; // Import our data
import './HomePage.css'; // Import the CSS Module

function HomePage() {
  return (
    <section>
      <h1>Latest Blog Posts</h1>
      <div className="blog-posts-grid"> {/* Apply grid styling */}
        {blogPosts.map(post => (
          <BlogPostCard key={post.id} post={post} /> // Key prop is crucial here
        ))}
      </div>
    </section>
  );
}

export default HomePage;