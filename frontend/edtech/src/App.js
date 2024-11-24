import "./App.css";
import React, { useState } from 'react';

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [difficulty, setDifficulty] = useState(5); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPdfFile(file); 
    }
  };

  const handleUpload = () => {
    if (pdfFile) { // ross put the PDF check here, will send to API instead 
    
  
      const request = {
        pdf: pdfFile, 
        difficulty: difficulty,
      };

      console.log('Request:', request); 
    } else {
      console.log('No PDF file selected.');
    }
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>EdTech</p>
        <p>PDF Upload</p>

        <input 
          type="file" 
          accept="application/pdf" 
          onChange={handleFileChange} 
        />
        <div style={{ marginTop: '20px' }}>
          <label>
            Difficulty Level: {difficulty}
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={difficulty} 
              onChange={handleDifficultyChange} 
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>

        <button onClick={handleUpload}>Generate Request</button>

        
      </header>
    </div>
  );
}

export default App;
