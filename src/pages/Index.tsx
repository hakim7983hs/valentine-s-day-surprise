import FallingHearts from '../components/FallingHearts';
import PhotoFrame from '../components/PhotoFrame';
import DateDisplay from '../components/DateDisplay';
import HiddenLetter from '../components/HiddenLetter';
import valentineBg from '../assets/valentine-bg.jpg';

const Index = () => {
  // Customize these values for your special someone!
  const specialDate = "February 14, 2024";
  const loveMessage = "Every moment with you feels like a beautiful dream. You are my sunshine, my heart, my everything. I love you more than words could ever express. Happy Valentine's Day, my love! 💕";

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(26, 10, 16, 0.85), rgba(45, 21, 32, 0.9)), url(${valentineBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <FallingHearts />
      
      <div className="relative z-10 flex flex-col items-center py-12 px-6 gap-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="font-dancing text-5xl sm:text-7xl text-rose drop-shadow-2xl mb-4">
            Happy Valentine's Day
          </h1>
          <p className="font-playfair italic text-xl text-gold tracking-widest">
            To the love of my life
          </p>
        </header>

        {/* Photo Frame */}
        <PhotoFrame caption="Us Together Forever" />
        
        {/* Date Display */}
        <DateDisplay date={specialDate} label="Our Special Day" />
        
        {/* Hidden Letter */}
        <HiddenLetter message={loveMessage} />
      </div>
    </div>
  );
};

export default Index;
