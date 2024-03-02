import React, { useState, useRef } from 'react';
import sonnetsData from './data/sonnetsData'; // Assuming this import works correctly
import Header from './components/Header';
import './styles.css';

export default function App() {
  const inputRef = useRef();
  const [searchInput, setSearchInput] = useState('');

  function handleClick() {
    setSearchInput(inputRef.current.value.trim());
  }
  const filteredSonnets = sonnetsData.filter((sonnet) => {
    const lowerCaseLines = sonnet.lines.map((line) => line.toLowerCase());
    return lowerCaseLines.some((line) => line.includes(searchInput.toLowerCase()));
  });

  return (
    <div className='wrapper'>
      <Header searchProps={{ inputRef, handleClick }} />
      <div className='sonnets-container'>
        {filteredSonnets.map((sonnet) => (
          <div className='sonnet' key={sonnet.number}>
            <h3>Sonnet {sonnet.number}</h3>
            {sonnet.lines.map((line, index) => (
              <p key={index}>{line}</p>
              
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


/*Bonus Challenges
      
    - Arama sonucu yoksa, "sonnets-container" div'inde "Ne yazık ki, araman sonucunda hiçbir şey bulamadın." yazan bir <p> öğesi oluşturun. <p> öğesine "no-results-message" şeklinde bir className verin. 
      
    - Sonuçlar varsa, sonedeki searchInput değeriyle eşleşen her kelimenin etrafına bir <span> koyun. Böylece kelime otomatik olarak vurgulanacaktır (CSS zaten ayarlanmıştır). 
*/
