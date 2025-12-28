import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DocumentDetail from '../components/DocumentDetail';

const DocumentPage = () => {
  const { id } = useParams();
console.log('Document ID:', id);


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          textDecoration: 'none',
          color: '#007bff',
          fontWeight: 'bold'
        }}
      >
        ← Back to Home
      </Link>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Document Detail</h1>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '6px',
        padding: '15px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <DocumentDetail id={id} />
      </div>
    </div>
  );
};

export default DocumentPage;

