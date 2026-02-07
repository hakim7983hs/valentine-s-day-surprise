import { useState } from 'react';

interface HiddenLetterProps {
  message: string;
}

const HiddenLetter = ({ message }: HiddenLetterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden-letter-container">
      <div 
        className={`envelope ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="envelope-flap"></div>
        <div className="envelope-body"></div>
        <div className="envelope-seal">💌</div>
      </div>
      <p className="envelope-text">Click to open my heart</p>

      {isOpen && (
        <div className="letter-overlay" onClick={() => setIsOpen(false)}>
          <div className="letter-modal" onClick={(e) => e.stopPropagation()}>
            <button className="letter-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>
            <div className="letter-content">
              {message}
            </div>
            <div className="letter-signature">
              Forever Yours ❤
            </div>
            <div className="letter-hearts">
              <span>💕</span>
              <span>💖</span>
              <span>💕</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiddenLetter;
