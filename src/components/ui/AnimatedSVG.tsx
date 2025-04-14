// components/AnimatedSVG.tsx
import React from 'react';

const AnimatedSVG = () => {
  return (
    <div className="relative w-full h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="430"
        height="430"
        fill="none"
        viewBox="0 0 430 430"
        className="w-full h-full"
      >
        {/* Background glow effect */}
        <path
          d="M57.3 226.6c42.4 42.3 97.501 97.3 97.501 97.3s147.9-147.8 217.9-217.8"
          stroke="url(#glow-gradient)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.3"
          className="blur-md"
        />
        
        {/* Main animated path */}
        <path
          stroke="url(#line-gradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="17.02"
          strokeWidth="16"
          d="M57.3 226.6c42.4 42.3 97.501 97.3 97.501 97.3s147.9-147.8 217.9-217.8"
          className="animate-draw"
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
        }
      `}</style>
    </div>
  );
};

export default AnimatedSVG;