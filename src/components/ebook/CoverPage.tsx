import beyondHorizonsLogo from "@/assets/beyond-horizons-logo.png";

const CoverPage = () => {
  return (
    <div data-pdf-page className="ebook-page cover-page relative overflow-hidden flex flex-col justify-end p-10 md:p-16 box-border bg-foreground">
      {/* Logo at Top */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src={beyondHorizonsLogo} 
          alt="Beyond Horizons" 
          className="w-24 md:w-32 h-auto"
        />
      </div>

      {/* Abstract Art Layer - Using explicit colors for PDF compatibility */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              {/* Sage: #c6e0b3, Berry: #a12767 - using explicit hex for PDF rendering */}
              <stop offset="0%" stopColor="#c6e0b3" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a12767" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <ellipse cx="350" cy="80" rx="180" ry="180" fill="url(#grad1)" />
          <ellipse cx="50" cy="400" rx="120" ry="120" fill="#c6e0b3" opacity="0.15" />
          <path d="M0,300 Q100,250 200,350 T400,300" stroke="#c6e0b3" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,350 Q150,300 300,400 T400,350" stroke="#a12767" strokeWidth="0.5" fill="none" opacity="0.3" />
        </svg>
      </div>

      {/* Typography Layer */}
      <div className="relative z-10 text-left">

        <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.9] mb-6 text-white italic drop-shadow-2xl">
          <span className="block">Ascending</span>
          <span className="block">Asia</span>
        </p>

        {/* Removed backdrop-blur-sm for PDF compatibility */}
        <div className="text-sm text-gray-400 font-light mb-10 border-l border-sage/50 pl-4 leading-relaxed">
          Legal Strategies for<br />
          Advanced Air Mobility<br />
          Market Entry 2026
        </div>

        <div className="border-t border-white/20 pt-4 text-[0.6rem] text-gray-500 flex justify-between">
          <span>JAN 2026</span>
          <span>CONFIDENTIAL</span>
          <span>© AUTHORS</span>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
