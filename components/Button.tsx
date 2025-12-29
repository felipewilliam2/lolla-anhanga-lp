import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, className = '', variant = 'primary', fullWidth = false }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg uppercase tracking-wide";
  
  const variants = {
    primary: "bg-anhanga-yellow text-anhanga-darkBlue hover:bg-anhanga-yellowHover",
    secondary: "bg-white text-anhanga-blue hover:bg-gray-100",
    outline: "border-2 border-white text-white hover:bg-white hover:text-anhanga-blue"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      <MessageCircle size={24} />
      {text}
    </a>
  );
};

export default Button;