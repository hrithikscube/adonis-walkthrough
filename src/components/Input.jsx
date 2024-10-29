import React from 'react'

const Input = ({ name, type, value, handleChange, label, width }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={label}
            className={`text-sm p-3 border border-[#808080]/20 rounded outline-[#121212] ${width || 'w-full'}`}
        />
    )
}

export default Input