import React from 'react';

const FormInput = ({
    type = 'text',
    id,
    value,
    onChange,
    label,
    placeholder,
    error,
    required = false,
    disabled = false,
    onBlur
}) => {
    const isCheckbox = type === 'checkbox';

    return (
        <div className={`flex flex-col gap-2 relative mb-5 ${isCheckbox ? 'flex-row items-center gap-3 bg-[#f9f9f9] p-3 rounded-xl' : ''}`}>
            {/* Input Element */}
            {isCheckbox ? (
                <input
                    type="checkbox"
                    id={id}
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                    required={required}
                    disabled={disabled}
                    className="w-5 h-5 accent-[#ff758c] m-0"
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    required={required}
                    disabled={disabled}
                    className="p-3.5 px-4 border-2 border-[#eee] rounded-xl text-base font-inherit transition-all duration-300 bg-[#fdfdfd] focus:outline-none focus:border-[#ffb6b9] focus:shadow-[0_0_0_4px_rgba(255,154,158,0.1)] focus:bg-white placeholder:text-[#ccc]"
                />
            )}

            {/* Label */}
            {label && (
                <label
                    htmlFor={id}
                    className={`font-semibold text-[#333] text-sm ml-1 ${isCheckbox ? 'm-0 cursor-pointer flex-1 font-medium' : ''}`}
                >
                    {label}
                </label>
            )}

            {/* Error Message */}
            {error && (
                <small className="text-[#e74c3c] text-sm mt-1 flex items-center gap-1 before:content-['⚠️'] before:text-xs">
                    {error}
                </small>
            )}
        </div>
    );
};

export default FormInput;
