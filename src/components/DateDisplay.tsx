interface DateDisplayProps {
  date: string;
  label?: string;
}

const DateDisplay = ({ date, label = "Together Since" }: DateDisplayProps) => {
  return (
    <div className="text-center p-6 bg-burgundy/30 backdrop-blur-sm rounded-2xl border border-gold/30 shadow-xl">
      <p className="font-playfair italic text-gold text-sm tracking-widest uppercase mb-2">{label}</p>
      <p className="font-dancing text-4xl sm:text-5xl text-rose drop-shadow-lg">{date}</p>
      <div className="flex justify-center gap-2 mt-4 text-2xl">
        <span className="animate-heartbeat text-rose">❤</span>
        <span className="animate-heartbeat text-rose" style={{ animationDelay: '0.2s' }}>❤</span>
        <span className="animate-heartbeat text-rose" style={{ animationDelay: '0.4s' }}>❤</span>
      </div>
    </div>
  );
};

export default DateDisplay;
