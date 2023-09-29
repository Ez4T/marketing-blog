'use client';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
    text: string;
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    className?: string;
    onClick?: () => void;
}

export default function Button({ text, type, className = "", onClick }: ButtonProps): React.JSX.Element {
    return (
        <button
            className={`bg-primary text-white p-4 
            rounded-sm hover:bg-opacity-50 transition-colors ${className}`}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
}