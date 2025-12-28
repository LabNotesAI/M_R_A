import React from 'react';

const TagFilter = ({ onSelectTag, selectedTags = [] }) => {
  const tags = ['atlas', 'docs']; // Example tags

  const buttonStyle = (tag) => ({
    padding: '6px 12px',
    margin: '4px',
    borderRadius: '4px',
    border: '1px solid #007bff',
    backgroundColor: selectedTags.includes(tag) ? '#007bff' : '#fff',
    color: selectedTags.includes(tag) ? '#fff' : '#007bff',
    cursor: 'pointer',
    fontWeight: 'bold'
  });

  return (
    <div style={{ marginBottom: '10px' }}>
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          style={buttonStyle(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;

