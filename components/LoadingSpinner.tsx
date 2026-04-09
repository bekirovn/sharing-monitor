import React from 'react';

interface LoadingSpinnerProps {
  loading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loading }) => {
  return (
    <div className={`fixed inset-0 flex justify-center items-center ${loading ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      {loading && (
        <div className="border-4 border-opacity-10 border-blue-500 border-t-4 rounded-full w-12 h-12 animate-spin relative z-10"></div>
      )}
    </div>
  );
};

export default LoadingSpinner;
