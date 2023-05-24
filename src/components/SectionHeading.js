import React from 'react';

const SectionHeading = ({ title }) => {
  return (
    <div className="flex items-center justify-center mx-3 py-2 mb:py-4 mb-4 bg-[#0fb5a753]">

      <h2 className=" text-xl md:text-3xl font-bold text-secondary_color">{title}</h2>

    </div>
  );
};

export default SectionHeading;