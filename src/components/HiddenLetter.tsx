import { useState } from 'react';

interface HiddenLetterProps {
  message: string;
}

const HiddenLetter = ({ message }: HiddenLetterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden-letter-container">
      <div className="envelope-wrapper">
        <div 
          className={`envelope ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(true)}
        >
          <div className="envelope-flap"></div>
          <div className="envelope-back"></div>
          <div className="envelope-seal">💌</div>
        </div>
      </div>
      <p className="envelope-text">Click to reveal my heart...</p>

      {isOpen && (
        <div className="letter-overlay" onClick={() => setIsOpen(false)}>
          <div className="letter-modal" onClick={(e) => e.stopPropagation()}>
            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>
            <div className="corner-decoration bottom-right"></div>
            
            <button className="letter-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>
            
            <div className="letter-inner">
              <h2 className="letter-greeting">My Dearest Love,</h2>
              
              <p className="letter-content">
                {message}
              </p>
              
              <p className="letter-signature">
                Forever & Always Yours ♥
              </p>
              
              <div className="letter-decoration">
                <span>💕</span>
                <span>❤️</span>
                <span>💕</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiddenLetter;
