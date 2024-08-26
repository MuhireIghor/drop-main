import React from 'react'
import { CaptureIcon, ImportIcon } from '../assets/icons';

interface DescriptionContainerProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    title: string;
    subtitle: string;
    upload?: boolean;
    capture?: boolean
}

export default function DescriptionContainer({ title, subtitle, capture, upload }: DescriptionContainerProps) {
    return (
        <div className='py-6  border-border-line space-y-3'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='text-sm text-neutral-500'>{subtitle}</p>
            <textarea
                rows={6}
                placeholder='Digite alguma coisa...'
                className='placeholder:text-neutral-400 placeholder:text-sm tracking-[-0.14px] w-full p-2 border rounded-lg outline-none bg-main-background focus:ring-1 ring-main-primary'
            />
            <div className='flex items-center gap-x-2 text-main-primary hover:bg-main-primary hover:text-white bg-neutral-100 w-fit'>
                {
                    upload && <div
                        role='button'
                        className='p-2 rounded-lg flex items-center gap-x-2 '
                    >
                        <ImportIcon />
                        {!capture && <span className='text-sm font-medium'><span className='text-sm font-medium'>Capturar Descrição</span></span>}
                    </div>
                }
                {capture &&
                    <div
                        role='button'
                        className='p-2 rounded-lg flex items-center gap-x-2 '>
                        <CaptureIcon />
                        <span className='text-sm font-medium'>Capturar Descrição</span>
                    </div>
                }
            </div>
        </div>
    )
}
