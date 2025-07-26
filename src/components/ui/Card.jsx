const Card = ({ children, className = '', hover = true }) => {
  const baseClasses = 'bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 transition-all duration-300';
  const hoverClasses = hover ? 'hover:bg-white/20 hover:shadow-xl hover:-translate-y-2' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;