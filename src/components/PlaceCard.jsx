import React from 'react';

const PlaceCard = ({ icon, name, category, distance, description, rating }) => {
    return (
        <div className="bg-white border border-black/5 rounded-2xl p-6 text-center transition-all duration-300 shadow-sm flex flex-col items-center h-full hover:-translate-y-2 hover:shadow-md hover:border-[#ffe0e0]">
            <div className="text-[3rem] mb-4 bg-[#fff0f5] w-20 h-20 rounded-full flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-[1.2rem] text-[#333] mb-2 font-bold">
                {name}
            </h3>
            <p className="text-[0.85rem] text-[#ff758c] font-semibold mb-1 uppercase tracking-wide">
                {category}
            </p>
            <p className="text-[0.9rem] text-[#999] mb-4 bg-[#f5f5f5] py-1 px-2.5 rounded">
                {distance}
            </p>
            <p className="text-[0.95rem] text-[#666] leading-relaxed mb-4 flex-grow">
                {description}
            </p>
            <div className="font-bold text-[#ffb400] text-[1.1rem]">
                ⭐ {rating}
            </div>
        </div>
    );
};

export default PlaceCard;
