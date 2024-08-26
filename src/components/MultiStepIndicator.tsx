import React from 'react'
import clsx from "clsx";

interface MultistepIndicatorProps {
    steps: number,
    activeStep: number
}

export default function MultiStepIndicator({ steps, activeStep }: MultistepIndicatorProps) {
    return (
        <div className='w-full flex items-center gap-x-2'>
            {
                Array(steps).fill(1).map((step, idx) => (
                    <div key={idx} className={clsx('w-full rounded-sm h-[2px]',
                        activeStep > idx ? "bg-main-primary" : "bg-neutral-300"
                    )
                    } />
                ))
            }
        </div>
    )
}
