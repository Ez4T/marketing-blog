'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/Button/Button';

export default function ContactSection(): React.JSX.Element {

    const router = useRouter();

    return (
        <div className="w-full h-80 bg-secondary-blue bg-opacity-20">
            <div className="mx-auto flex flex-col h-full items-center justify-center gap-4">
                <h1 className="flex flex-col text-xl md:text-2xl lg:text-3xl text-center leading-normal font-bold">
                    <span>
                        {`I'd Love to Hear From You.`}
                    </span>
                    <span>
                        {`Here's How You Can Reach Me.`}
                    </span>
                </h1>
                <Button
                    type="button"
                    text="Talk to me"
                    onClick={() => router.push('/contact')}
                />
            </div>
        </div>
    )
}