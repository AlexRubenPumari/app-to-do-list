import React from 'react';

export default function CircleButton ({ onClick, children, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`flex-center-all aspect-square rounded-full bg-violet-600 text-white shadow-lg hover:bg-violet-700 focus-ring-default ${className}`}
    >
      {children}
    </button>
  )
}