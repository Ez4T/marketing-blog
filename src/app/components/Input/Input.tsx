import React from "react"

interface InputProps {
    label: string;
    name: string;
    type: HTMLInputElement["type"];
    required?: boolean;
}

export default function Input({ label, name, type, required }: InputProps): React.JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-primary-blue font-bold">{label}</label>
            <input
                className="w-full focus:outline-none p-2"
                type={type}
                name={name}
                required={required}
            />
        </div>
    )
}