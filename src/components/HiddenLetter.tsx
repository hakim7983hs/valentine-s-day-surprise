import { useState } from 'react';

interface HiddenLetterProps {
  message: string;
}

const HiddenLetter = ({ message }: HiddenLetterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Envelope */}
      <div
        className="relative cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        {/* Envelope Body */}
        <div className="w-48 h-32 bg-gradient-to-br from-rose to-pink-300 rounded-lg shadow-xl relative overflow-hidden">
          {/* Envelope Flap */}
          <div 
            className="absolute -top-1 left-0 w-0 h-0 transition-transform duration-500"
            style={{
              borderLeft: '96px solid transparent',
              borderRight: '96px solid transparent',
              borderTop: '50px solid hsl(35, 60%, 60%)',
            }}
          />
          {/* Seal */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-burgundy rounded-full flex items-center justify-center shadow-lg border-2 border-gold">
            <span className="text-xl">💌</span>
          </div>
        </div>
      </div>
      <p className="font-dancing text-lg text-gold">Click to open my heart</p>

      {/* Letter Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-gradient-to-br from-cream to-amber-50 p-8 rounded-lg max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-8 h-8 bg-burgundy text-cream rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            
            {/* Letter Content */}
            <div className="text-center">
              <h3 className="font-dancing text-3xl text-burgundy mb-6">My Dearest Love,</h3>
              <p className="font-playfair italic text-burgundy/80 text-lg leading-relaxed">
                {message}
              </p>
              <p className="font-dancing text-2xl text-gold mt-6 text-right">
                Forever Yours ❤
              </p>
              <div className="flex justify-center gap-3 mt-6 text-3xl">
                <span className="animate-heartbeat">💕</span>
                <span className="animate-heartbeat" style={{ animationDelay: '0.1s' }}>💖</span>
                <span className="animate-heartbeat" style={{ animationDelay: '0.2s' }}>💕</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiddenLetter;
