interface DateDisplayProps {
  date: string;
  label?: string;
}

const DateDisplay = ({ date, label = "Together Since" }: DateDisplayProps) => {
  return (
    <div className="date-display">
      <p className="date-label">{label}</p>
      <p className="date-value">{date}</p>
      <div className="date-hearts">
        <span className="date-heart">❤</span>
        <span className="date-heart">❤</span>
        <span className="date-heart">❤</span>
      </div>
    </div>
  );
};

export default DateDisplay;
