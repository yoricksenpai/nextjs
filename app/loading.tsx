import React from 'react';

// Composant de chargement avec Tailwind CSS
const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-800">Chargement...</p>
    </div>
  );
};

export default Loading;