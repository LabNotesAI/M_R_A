import React, { useState } from 'react';
import DocumentList from '../components/DocumentList';

const HomePage = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSelectTag = (tag) => {
    setTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#333'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>MongoDB Docs</h1>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Search by title..."
        style={inputStyle}
      />
      <DocumentList title={title} tags={tags} onSelectTag={handleSelectTag} />
    </div>
  );
};

export default HomePage;

