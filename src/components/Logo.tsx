const Logo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`${sizes[size]} relative`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F4D03F" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer decorative ring */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.6"/>
          
          {/* Decorative flourishes */}
          <g fill="url(#goldGradient)" filter="url(#glow)">
            {/* Top flourish */}
            <path d="M50 8 Q55 15 60 12 Q55 18 50 15 Q45 18 40 12 Q45 15 50 8" />
            {/* Bottom flourish */}
            <path d="M50 92 Q55 85 60 88 Q55 82 50 85 Q45 82 40 88 Q45 85 50 92" />
            {/* Left flourish */}
            <path d="M8 50 Q15 45 12 40 Q18 45 15 50 Q18 55 12 60 Q15 55 8 50" />
            {/* Right flourish */}
            <path d="M92 50 Q85 45 88 40 Q82 45 85 50 Q82 55 88 60 Q85 55 92 50" />
            
            {/* Corner decorations */}
            <circle cx="20" cy="20" r="3" />
            <circle cx="80" cy="20" r="3" />
            <circle cx="20" cy="80" r="3" />
            <circle cx="80" cy="80" r="3" />
          </g>
          
          {/* Central V letter */}
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fill="url(#goldGradient)"
            fontFamily="Playfair Display, serif"
            fontSize="42"
            fontWeight="600"
            filter="url(#glow)"
          >
            V
          </text>
          
          {/* Inner decorative elements */}
          <path
            d="M35 35 Q40 30 50 32 Q60 30 65 35"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            opacity="0.8"
          />
          <path
            d="M35 70 Q40 75 50 73 Q60 75 65 70"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            opacity="0.8"
          />
        </svg>
      </div>
      {size !== "sm" && (
        <div className="text-center mt-2">
          <h1 className="font-display text-gold text-xl md:text-2xl font-semibold tracking-wider">
            visista
          </h1>
          <p className="font-sans text-gold/80 text-[10px] md:text-xs tracking-[0.3em] uppercase">
            Gold & Diamonds
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
