"use client";
import { Loader,Placeholder } from 'rsuite';

export default function Loading() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Placeholder.Paragraph rows={10} />
            <Loader size="lg" content="Loading..." />
        </div>
    )
}