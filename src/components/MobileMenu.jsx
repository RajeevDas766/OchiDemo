import React from 'react';

const MobileMenu = ({ isOpen, onClose, navItems }) => {
  return (
    <div 
      className={`fixed inset-0 bg-black/95 z-40 transform transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={onClose}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
