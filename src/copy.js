import React from 'react';
import './App.css';

const Copy = () => {
  const handleCopy = () => {
    const textarea = document.querySelector('.text');
    if (textarea) {
      textarea.select(); 
      navigator.clipboard.writeText(textarea.value);
      alert('Text copied to clipboard!');
    } else {
      alert('Textarea not found!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button className="btn3" onClick={handleCopy} >
        Copy Text
      </button>
    </div>
  );
};

export default Copy;
