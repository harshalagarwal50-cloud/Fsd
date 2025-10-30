// src/components/BlogPostCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.article`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block; /* Ensures no extra space below image */
`;

const CardContent = styled.div`
  padding: 15px;
  flex-grow: 1; /* Allows content to take up available space */
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.3;
`;

const CardExcerpt = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
  flex-grow: 1; /* Ensures excerpt takes up space */
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s;
  align-self: flex-start; /* Aligns button to the start */

  &:hover {
    background-color: #0056b3;
  }
`;

function BlogPostCard({ post }) {
  return (
    <Card>
      <CardImage src={post.thumbnailUrl} alt={post.title} />
      <CardContent>
        <CardTitle>{post.title}</CardTitle>
        <CardExcerpt>{post.excerpt}</CardExcerpt>
        <ReadMoreLink to={`/post/${post.id}`}>Read More</ReadMoreLink>
      </CardContent>
    </Card>
  );
}

export default BlogPostCard;