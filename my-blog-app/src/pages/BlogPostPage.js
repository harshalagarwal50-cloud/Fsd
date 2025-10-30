// src/pages/BlogPostPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'; // Assuming Modal uses a Portal
import blogPosts from '../data/blogPosts'; // Import our data
import NotFoundPage from './NotFoundPage'; // Import 404 page
import styled from 'styled-components'; // Using styled-components for this page's specific elements

const ArticleWrapper = styled.article`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  margin-top: 30px;
`;

const BackButton = styled.button`
  background: #6c757d;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5a6268;
  }
`;

const PostTitle = styled.h1`
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PostContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 25px;
  white-space: pre-wrap; /* Preserves formatting from content string */

  /* Simple styling for paragraphs within content */
  & + & {
    margin-top: 1rem;
  }
`;

const ShareButton = styled.button`
  background-color: #28a745; /* Green share button */
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #218838;
  }
`;

const ShareModalContent = styled.div`
  text-align: center;

  h2 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  p {
    color: #555;
    margin-bottom: 25px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 2.5rem; /* Larger icons */

  a {
    color: #555;
    transition: color 0.2s ease;

    &:hover {
      color: #007bff; /* Example hover color */
    }
  }
`;


function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // In a real app, this would be an API call based on `id`
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <NotFoundPage />; // Or navigate to a dedicated 404 page with React Router
  }

  return (
    <ArticleWrapper>
      <BackButton onClick={() => navigate(-1)}>
        &larr; Back to Posts
      </BackButton>
      <PostTitle>{post.title}</PostTitle>
      <PostImage src={post.imageUrl} alt={post.title} />
      {/* Split content by newlines to create paragraphs dynamically */}
      {post.content.split('\n').map((paragraph, index) => (
        <PostContent key={index}>{paragraph}</PostContent>
      ))}
      <ShareButton onClick={() => setShowModal(true)}>
        Share This Post
      </ShareButton>

      {/* Example of a Portal usage */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ShareModalContent>
            <h2>Share "{post.title}"</h2>
            <p>Spread the word! Share this inspiring post:</p>
            <SocialIcons>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer">🐦</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">📘</a>
                <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent('Check out this blog post: ' + window.location.href)}`} target="_blank" rel="noopener noreferrer">✉️</a>
            </SocialIcons>
          </ShareModalContent>
        </Modal>
      )}
    </ArticleWrapper>
  );
}

export default BlogPostPage;