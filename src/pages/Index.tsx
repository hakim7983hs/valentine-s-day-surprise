import '../styles/valentine.css';
import FallingHearts from '../components/FallingHearts';
import PhotoFrame from '../components/PhotoFrame';
import DateDisplay from '../components/DateDisplay';
import HiddenLetter from '../components/HiddenLetter';

const Index = () => {
  // Customize these values for your special someone!
  const specialDate = "February 14, 2024";
  const loveMessage = "Every moment with you feels like a beautiful dream. You are my sunshine, my heart, my everything. I love you more than words could ever express. Happy Valentine's Day, my love! 💕";

  return (
    <div className="valentine-page">
      <FallingHearts />
      
      <div className="valentine-content">
        <header>
          <h1 className="valentine-title">Happy Valentine's Day</h1>
          <p className="valentine-subtitle">To the love of my life</p>
        </header>

        <PhotoFrame caption="Us Together Forever" />
        
        <DateDisplay date={specialDate} label="Our Special Day" />
        
        <HiddenLetter message={loveMessage} />
      </div>
    </div>
  );
};

export default Index;
