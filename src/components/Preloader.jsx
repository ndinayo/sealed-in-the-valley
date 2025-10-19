import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-darkblue text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-solid"></div>
      <p className="ml-4 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Preloader;
