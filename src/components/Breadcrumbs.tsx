import React from 'react'
import { ChevronRightIcon, HomeIcon } from '../assets/icons'

interface BreadcrumbProps {
    items: {
        label: string,
        screen: string
    }[]
}
export default function Breadcrumbs({ items }: BreadcrumbProps) {
    return (
        <div className='flex items-center gap-x-2 px-6 py-5 '>
            <div role='button' className='flex items-center gap-x-2 text-neutral-400'>
                <HomeIcon />
                <ChevronRightIcon />
            </div>
            <div role='button' className='p-1.5 text-main-primary bg-neutral-100 rounded text-xs font-medium'>
                {items[0].label}
            </div>
            {
                items.length > 1 && <div className='flex text-neutral-400 gap-x-2'>
                    <ChevronRightIcon />
                    <span>...</span>
                    <ChevronRightIcon />
                </div>
            }
            {items.length > 1 && <span className='text-neutral-400 text-sm'>{items[1].label}</span>}
        </div>
    )
}
