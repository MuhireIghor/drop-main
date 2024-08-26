import React from 'react'
import clsx from 'clsx'
import { ChevronLeftIcon, ChevronRightIcon, ContactIcon } from '../assets/icons';
interface FooterProps {
    withNavigation?: boolean
    continueLabel?: string;
}

export default function Footer({ withNavigation, continueLabel
}: FooterProps) {
    return (
        <div className="pt-5 border-t-2 border-border-line">
            {
                withNavigation && <div className='w-full flex items-center justify-end gap-x-3 pt-4'>
                    <button className='flex items-center gap-x-2 bg-neutral-100 hover:bg-main-primary hover:text-neutral-50 transition-colors duration-200 rounded-md text-main-primary px-5 py-2'>
                        <ChevronLeftIcon />
                        <span className='font-medium text-sm'>Voltar</span>
                    </button>
                    <button className='rounded-xl text-white flex items-center gap-x-2 bg-main-primary px-5 py-2 text-sm font-medium'>
                        <span>{continueLabel ?? "Continuar"}</span>
                        <ChevronRightIcon />
                    </button>
                </div>
            }
            <div className='py-6  text-center w-full flex items-center justify-center gap-x-1 text-base font-medium text-neutral-500'>
                <span>Falar com o</span>
                <button className='text-main-primary flex items-center gap-x-1'>
                    <span className=''>suporte</span>
                    <ContactIcon />
                </button>
            </div>

        </div>
    )
}
