import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-10 rounded-[20px] text-center transition-all duration-400 border border-black/5 shadow-sm hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg">
            <div className="text-[3.5rem] mb-6 bg-gradient-to-br from-[#FF9A9E] to-[#FECFEF] bg-clip-text text-transparent drop-shadow-md">
                {icon}
            </div>
            <h3 className="text-[1.4rem] mb-4 text-[#333] font-bold">
                {title}
            </h3>
            <p className="text-[#666] leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
