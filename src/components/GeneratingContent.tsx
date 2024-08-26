import React from 'react'
import MultiStepIndicator from './MultiStepIndicator';
import { CheckIcon } from '../assets/icons';

interface Props {
    title: string;
    subtitle: string;
    steps: number
}
export default function GeneratingContent({ title, subtitle, steps }: Props) {
    return (
        <div className='py-5 space-y-5 px-6'>
            <MultiStepIndicator steps={steps} activeStep={steps} />
            <div className='flex flex-col items-center space-y-5 pt-8'>
                <CheckIcon />
                <div className='space-y-2 text-center'>
                    <h5 className='text-xl font-semibold text-neutral-700'>{title}</h5>
                    <p className='text-neutral-500 text-sm'>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
