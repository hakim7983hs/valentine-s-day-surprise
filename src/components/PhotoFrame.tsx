interface PhotoFrameProps {
  photoUrl?: string;
  caption?: string;
}

const PhotoFrame = ({ photoUrl, caption = "Our Beautiful Moments" }: PhotoFrameProps) => {
  return (
    <div className="photo-frame-container">
      <div className="photo-frame-wrapper">
        <div className="photo-frame">
          <div className="photo-inner">
            {photoUrl ? (
              <img src={photoUrl} alt="Our photo" className="photo-image" />
            ) : (
              <div className="photo-placeholder">
                <span className="photo-placeholder-icon">💑</span>
                <span className="photo-placeholder-text">Your Photo Here</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="photo-caption">{caption}</p>
    </div>
  );
};

export default PhotoFrame;
