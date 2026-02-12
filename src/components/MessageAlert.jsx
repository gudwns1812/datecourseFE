import React from 'react';

const MessageAlert = ({
    message,
    type = 'info',
    dismissible = true,
    onDismiss
}) => {
    if (!message) return null;

    const typeStyles = {
        error: "bg-[#fff5f5] text-[#c53030] border-[#fed7d7]",
        success: "bg-[#f0fff4] text-[#276749] border-[#c6f6d5]",
        warning: "bg-[#fffaf0] text-[#c05621] border-[#feebc8]",
        info: "bg-[#ebf8ff] text-[#2c5282] border-[#bee3f8]"
    };

    return (
        <div className={`p-4 px-6 rounded-xl flex justify-between items-center gap-4 font-medium animate-[slideIn_0.3s_cubic-bezier(0.25,0.8,0.25,1)] shadow-sm mb-6 border ${typeStyles[type] || typeStyles.info}`}>
            <span className="flex-1 text-[0.95rem]">{message}</span>
            {dismissible && (
                <button
                    onClick={onDismiss}
                    className="bg-transparent border-none text-lg cursor-pointer text-current opacity-60 p-1 rounded-full transition-all duration-200 flex items-center justify-center w-8 h-8 hover:opacity-100 hover:bg-black/5"
                >
                    ✕
                </button>
            )}
            <style jsx>{`
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default MessageAlert;
