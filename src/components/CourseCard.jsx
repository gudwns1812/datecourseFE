import React from 'react';

const CourseCard = ({ icon, name, location, description, rating }) => {
    return (
        <div className="bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] text-white py-12 px-8 rounded-[20px] text-center min-h-[400px] flex flex-col justify-center items-center shadow-[0_15px_35px_rgba(255,154,158,0.4)] relative overflow-hidden transition-transform duration-400 group">
            {/* Background effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_60%)] z-0 pointer-events-none"></div>

            <div className="z-10 text-[5rem] mb-6 bg-white/20 w-[120px] h-[120px] rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                {icon}
            </div>
            <h2 className="z-10 text-[2.2rem] mb-2 font-extrabold drop-shadow-md">
                {name}
            </h2>
            <p className="z-10 text-[1.1rem] mb-6 opacity-95 bg-white/20 py-1.5 px-4 rounded-[20px] inline-block">
                📍 {location}
            </p>
            <p className="z-10 text-[1.05rem] mb-6 opacity-95 leading-relaxed max-w-[80%]">
                {description}
            </p>
            {rating && (
                <div className="z-10 text-[1.3rem] font-bold bg-white text-[#ff758c] py-2 px-4 rounded-xl shadow-sm">
                    ⭐ {rating}
                </div>
            )}
        </div>
    );
};

export default CourseCard;
