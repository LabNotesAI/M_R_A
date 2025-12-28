import React, { useState, useEffect } from 'react';
import TagFilter from './TagFilter';

const DocumentList = ({ title, tags, onSelectTag }) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Use first tag for filtering, or no tag
    const tagParam = tags.length > 0 ? tags[0] : '';
    const url = `${process.env.REACT_APP_API_BASE_URL}/documents?title=${encodeURIComponent(title)}&tag=${encodeURIComponent(tagParam)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Ensure data is an array
        setDocuments(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching documents:', err);
        setDocuments([]);
        setLoading(false);
      });
  }, [title, tags]);

  if (loading) return <div>Loading...</div>;

  if (documents.length === 0) return <div>No documents found.</div>;

  return (
    <div>
      <TagFilter onSelectTag={onSelectTag} />
      <ul>
        {documents.map(doc => (
		<li key={doc._id}>
  			<a href={`/documents/${doc._id}`}>{doc.title}</a>
		</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;

