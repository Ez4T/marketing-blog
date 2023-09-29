import React from "react"

interface TextareaProps {
    label: string;
    name: string;
    required?: boolean;
}

export default function Textarea({ label, name, required }: TextareaProps): React.JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-primary-blue font-bold">{label}</label>
            <textarea
                className="w-full focus:outline-none p-2 resize-none"
                rows={3}
                name={name}
                required={required}
            />
        </div>
    )
}