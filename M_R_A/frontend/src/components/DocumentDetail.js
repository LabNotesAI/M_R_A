import React, { useState, useEffect } from 'react';

const DocumentDetail = ({ id }) => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/documents/${id}`)
      .then(response => response.json())
      .then(data => setDocument(data));
  }, [id]);

  if (!document) return <div>Loading...</div>;

  return (
    <div>
      <h1>{document.title}</h1>
      <p>Updated: {document.updated ? new Date(document.updated).toLocaleString() : "N/A"}</p>
      <a href={document.url} target="_blank" rel="noopener noreferrer">Open in new tab</a>
      <div dangerouslySetInnerHTML={{ __html: document.body || "" }} />
    </div>
  );
};

export default DocumentDetail;
