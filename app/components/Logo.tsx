export default function Logo() {
  return (
    <svg
      viewBox="0 0 300 80"
      className="w-48 h-12"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background elements for street wear feel */}
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#ff6b35', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#000000" floodOpacity="0.8"/>
        </filter>
      </defs>

      {/* Decorative background shapes */}
      <rect x="0" y="0" width="300" height="80" fill="none"/>
      
      {/* Street wear style lines */}
      <line x1="10" y1="20" x2="40" y2="20" stroke="#ff6b35" strokeWidth="2" opacity="0.6"/>
      <line x1="260" y1="60" x2="290" y2="60" stroke="#ff6b35" strokeWidth="2" opacity="0.6"/>
      
      {/* Main text */}
      <text
        x="150"
        y="30"
        textAnchor="middle"
        className="fill-current text-white font-bold"
        style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif' }}
        filter="url(#shadow)"
      >
        STREET WEAR
      </text>
      
      <text
        x="150"
        y="55"
        textAnchor="middle"
        fill="url(#textGradient)"
        style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}
        filter="url(#shadow)"
      >
        CO.
      </text>

      {/* Urban style accents */}
      <circle cx="20" cy="40" r="3" fill="#ff6b35" opacity="0.8"/>
      <circle cx="280" cy="40" r="3" fill="#ff6b35" opacity="0.8"/>
      
      {/* Spray paint style dots */}
      <circle cx="50" cy="15" r="1.5" fill="#ffffff" opacity="0.7"/>
      <circle cx="70" cy="25" r="1" fill="#ff6b35" opacity="0.5"/>
      <circle cx="230" cy="65" r="1.5" fill="#ffffff" opacity="0.7"/>
      <circle cx="250" cy="55" r="1" fill="#ff6b35" opacity="0.5"/>
    </svg>
  );
}