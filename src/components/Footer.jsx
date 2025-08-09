import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaAnchor } from "react-icons/fa";
import { gsap } from 'gsap';

const socialLinks = [
  { href: "https://www.instagram.com/satyamrathod___/", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://www.linkedin.com/in/satyamrathod/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://github.com/satyamrathod45", icon: <FaGithub />, label: "GitHub" },
  { href: "mailto:satyamraathodi70@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

const OnePieceFooter = () => {
  const footerRef = useRef(null);
  const waveRef = useRef(null);
  const socialIconsRef = useRef([]);
  const treasureRef = useRef(null);
  const skullRef = useRef(null);
  const anchorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Wave animation
      gsap.to(waveRef.current, {
        x: -100,
        duration: 8,
        repeat: -1,
        ease: "none"
      });

      // Floating treasure chest animation
      gsap.to(treasureRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Rotating skull animation
      gsap.to(skullRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      // Swinging anchor animation
      gsap.to(anchorRef.current, {
        rotation: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        transformOrigin: "top center"
      });

      // Social icons hover animations
      socialIconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.set(icon, { scale: 1 });
          
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              scale: 1.3,
              rotation: 360,
              duration: 0.5,
              ease: "back.out(1.7)"
            });
          });

          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Initial entrance animation
      gsap.fromTo(footerRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative w-screen bg-black py-8 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #000000 100%)',
        boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.8), 0 -2px 10px rgba(255,215,0,0.1)'
      }}
    >
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-20">
        <svg 
          ref={waveRef}
          className="absolute bottom-0 w-[200%] h-24" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,120 Q150,80 300,120 T600,120 T900,120 T1200,120 V120 H0 Z" 
            fill="rgba(255,215,0,0.1)"
          />
          <path 
            d="M0,120 Q200,90 400,120 T800,120 T1200,120 V120 H0 Z" 
            fill="rgba(255,215,0,0.05)"
          />
        </svg>
      </div>

      {/* Decorative pirate elements */}
      <div className="absolute left-8 top-4">
        <div ref={treasureRef} className="text-yellow-400 text-2xl">
          💰
        </div>
      </div>
      
      <div className="absolute right-8 top-4">
        <div ref={anchorRef} className="text-yellow-400">
          <FaAnchor size={24} />
        </div>
      </div>

      <div className="absolute left-1/2 top-2 transform -translate-x-1/2">
        <div ref={skullRef} className="text-white text-xl opacity-30">
          ☠️
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row relative z-10">
        {/* Copyright with pirate flair */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-yellow-200 mb-1">
            ⚔️ Captain Bharath's Crew ⚔️
          </p>
          <p className="text-sm font-light text-gray-300">
            ©Bharath 2025. All treasures reserved
          </p>
        </div>

        {/* Animated social links */}
        <div className="flex justify-center gap-6 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              ref={el => socialIconsRef.current[index] = el}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-yellow-400 transition-colors duration-300 hover:text-yellow-300 text-xl p-2 rounded-full border-2 border-yellow-400 bg-gray-900 bg-opacity-80 backdrop-blur-sm"
              title={link.label}
            >
              {link.icon}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
            </a>
          ))}
        </div>

        {/* Privacy policy with pirate theme */}
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right text-gray-300 hover:text-yellow-400 transition-colors duration-300 relative group"
        >
          🗞️ Pirate Code & Privacy
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-2 left-4 text-yellow-400 opacity-60 text-xs">
        🏴‍☠️ Set sail for adventure!
      </div>
      
      <div className="absolute bottom-2 right-4 text-yellow-400 opacity-60 text-xs">
        One Piece is real! 🏆
      </div>

      {/* Subtle sparkle effects */}
      <div className="absolute top-8 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute top-12 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-8 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
    </footer>
  );
};

export default OnePieceFooter;