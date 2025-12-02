export function WorldMap() {
  return (
    <svg
      viewBox="0 0 1000 500"
      className="world-map-svg"
      preserveAspectRatio="none"
    >
      {/* Ocean background - dark blue */}
      <rect width="1000" height="500" fill="#0a1628" />
      
      {/* Subtle grid lines */}
      <g stroke="rgba(126, 200, 227, 0.1)" strokeWidth="0.5">
        {/* Latitude lines */}
        <line x1="0" y1="83" x2="1000" y2="83" />
        <line x1="0" y1="167" x2="1000" y2="167" />
        <line x1="0" y1="250" x2="1000" y2="250" />
        <line x1="0" y1="333" x2="1000" y2="333" />
        <line x1="0" y1="417" x2="1000" y2="417" />
        {/* Longitude lines */}
        <line x1="167" y1="0" x2="167" y2="500" />
        <line x1="333" y1="0" x2="333" y2="500" />
        <line x1="500" y1="0" x2="500" y2="500" />
        <line x1="667" y1="0" x2="667" y2="500" />
        <line x1="833" y1="0" x2="833" y2="500" />
      </g>
      
      {/* Continents - black land masses with cyan border */}
      <g fill="#050608" stroke="#7ec8e3" strokeWidth="0.8" strokeOpacity="0.4">
        
        {/* North America */}
        {/* Main landmass - USA/Canada around lng -100 (x=222), lat 45 (y=125) */}
        <path d="M 80 50 Q 120 35 180 45 L 250 60 Q 300 85 320 130 L 310 175 Q 280 215 240 240 L 190 260 Q 140 265 100 245 L 70 200 Q 45 150 55 100 L 80 50 Z" />
        {/* Alaska */}
        <path d="M 45 70 Q 70 55 95 65 L 85 95 Q 60 105 45 90 Z" />
        {/* Mexico & Central America */}
        <path d="M 120 245 Q 160 255 190 295 L 210 345 Q 190 375 150 365 L 125 325 Q 105 285 120 245 Z" />
        
        {/* South America - around lng -60 (x=333), lat -15 (y=292) */}
        <path d="M 210 365 Q 260 355 300 395 L 330 465 Q 315 530 265 545 L 215 535 Q 175 495 190 435 L 210 365 Z" />
        
        {/* Greenland */}
        <path d="M 340 25 Q 390 10 430 25 L 445 60 Q 435 95 390 100 L 350 85 Q 325 55 340 25 Z" />
        
        {/* Iceland */}
        <path d="M 420 65 Q 440 55 455 70 L 450 85 Q 435 95 420 80 Z" />
        
        {/* Europe - around lng 10 (x=528), lat 50 (y=111) */}
        {/* UK & Ireland */}
        <path d="M 475 100 Q 490 90 505 105 L 500 130 Q 485 140 475 125 Z" />
        <path d="M 460 110 Q 470 105 480 115 L 475 130 Q 465 135 460 125 Z" />
        {/* Scandinavia */}
        <path d="M 510 50 Q 540 35 570 50 L 585 90 Q 570 125 540 130 L 505 110 Q 495 75 510 50 Z" />
        {/* Western Europe - France, Germany, etc. */}
        <path d="M 490 130 Q 530 120 565 135 L 590 160 Q 595 195 575 225 L 540 240 Q 495 235 480 200 L 475 165 Q 480 145 490 130 Z" />
        {/* Iberian Peninsula */}
        <path d="M 460 175 Q 485 165 505 185 L 500 220 Q 475 240 455 225 L 450 195 Z" />
        {/* Italy */}
        <path d="M 530 200 Q 545 190 555 210 L 550 255 Q 535 275 520 260 L 525 225 Z" />
        {/* Eastern Europe */}
        <path d="M 565 100 Q 620 85 670 105 L 700 150 Q 690 195 645 215 L 595 205 Q 560 175 565 140 Z" />
        
        {/* Africa - around lng 20 (x=556), lat 5 (y=236) */}
        <path d="M 490 255 Q 545 240 600 265 L 655 340 Q 670 420 635 485 L 565 535 Q 490 545 455 500 L 440 420 Q 450 335 475 285 Z" />
        {/* Madagascar */}
        <path d="M 675 420 Q 695 410 710 430 L 705 485 Q 690 505 675 490 L 670 450 Z" />
        
        {/* Middle East */}
        <path d="M 615 220 Q 670 205 720 230 L 740 285 Q 720 330 665 340 L 615 320 Q 595 275 615 220 Z" />
        
        {/* Russia/Asia - around lng 100 (x=778), lat 55 (y=97) */}
        <path d="M 670 50 Q 780 30 900 55 L 980 95 Q 1000 140 990 185 L 935 200 Q 860 190 790 170 L 720 145 Q 680 115 685 80 Z" />
        
        {/* China & Mongolia */}
        <path d="M 780 165 Q 860 155 930 185 L 965 240 Q 945 295 890 315 L 815 305 Q 760 275 760 225 L 780 165 Z" />
        
        {/* India */}
        <path d="M 735 290 Q 780 270 820 300 L 830 365 Q 800 420 750 410 L 715 360 Q 710 320 735 290 Z" />
        
        {/* Southeast Asia */}
        <path d="M 830 310 Q 875 300 910 330 L 920 385 Q 890 430 845 420 L 815 375 Q 810 340 830 310 Z" />
        
        {/* Japan - lng 138 (x=883), lat 36 (y=150) */}
        <path d="M 920 130 Q 940 120 955 140 L 950 175 Q 935 195 920 180 L 915 155 Z" />
        <path d="M 930 180 Q 945 190 940 215 L 925 220 Q 915 205 925 190 Z" />
        
        {/* Korean Peninsula */}
        <path d="M 895 160 Q 910 155 920 175 L 915 205 Q 900 215 890 200 L 890 175 Z" />
        
        {/* Taiwan */}
        <path d="M 910 260 Q 925 255 930 275 L 920 290 Q 905 288 910 270 Z" />
        
        {/* Indonesia & Philippines */}
        <path d="M 860 385 Q 900 375 940 395 L 960 435 Q 940 475 890 465 L 850 435 Z" />
        <path d="M 935 320 Q 955 315 965 335 L 960 370 Q 945 380 935 365 Z" />
        
        {/* Australia - lng 135 (x=875), lat -25 (y=319) */}
        <path d="M 870 410 Q 940 390 1000 430 L 1025 495 Q 995 550 920 550 L 860 520 Q 830 475 850 430 Z" />
        
        {/* New Zealand */}
        <path d="M 1040 485 Q 1055 480 1065 500 L 1060 530 Q 1045 540 1035 525 Z" />
        <path d="M 1050 535 Q 1065 540 1060 560 L 1045 565 Q 1035 555 1045 545 Z" />
      </g>
      
      {/* Ocean texture pattern */}
      <defs>
        <pattern id="oceanDots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="0.6" fill="rgba(126, 200, 227, 0.05)" />
          <circle cx="30" cy="20" r="0.6" fill="rgba(126, 200, 227, 0.05)" />
          <circle cx="20" cy="40" r="0.6" fill="rgba(126, 200, 227, 0.05)" />
          <circle cx="50" cy="52" r="0.6" fill="rgba(126, 200, 227, 0.05)" />
          <circle cx="55" cy="28" r="0.6" fill="rgba(126, 200, 227, 0.05)" />
        </pattern>
      </defs>
      <rect width="1000" height="500" fill="url(#oceanDots)" />
    </svg>
  )
}
