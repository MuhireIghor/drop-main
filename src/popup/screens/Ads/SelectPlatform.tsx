import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import Footer from '../../../components/Footer'
import MultiStepIndicator from '../../../components/MultiStepIndicator'
import Navbar from '../../../components/Navbar'
import { FacebookIcon, FemaleIcon, GoogleIcon, KwaiIcon, MaleIcon, TiktokIcon } from '../../../assets/icons'


const platforms: {
    name: string;
    icon: JSX.Element
}[] = [
        {
            name: "Facebook Ads",
            icon: <FacebookIcon />
        },
        {
            name: "Google Ads",
            icon: <GoogleIcon />
        },
        {
            name: "TikTok Ads",
            icon: <TiktokIcon />
        },
        {
            name: "Kwai Ads",
            icon: <KwaiIcon />
        }
    ]

export default function SelectPlatform() {
    return (
        <div className='w-full h-full'>
            <Navbar back />
            <Breadcrumbs items={[
                { label: "Descrição", screen: '' },
                { label: "Plataforma de anúncio", screen: '' }
            ]} />
            <div className='px-4 pt-3'>
                <MultiStepIndicator steps={3} activeStep={2} />
                <div className='py-6  border-border-line space-y-3'>
                    <h3 className='text-2xl font-semibold'>Em qual plataforma você irá anunciar seu produto?</h3>
                    <p className='text-sm text-neutral-500'>Selecione uma plataforma abaixo:</p>
                </div>
                <div className='grid grid-cols-2 w-full gap-4 '>
                    {
                        platforms.map(platform => (
                            <div role='button' className='border border-border-line rounded-lg hover:border-main-primary py-8 px-6 flex flex-col items-center justify-center gap-y-3'>
                                {platform.icon}
                                <p className='text-sm text-neutral-500'>{platform.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='pt-6'>
                    <Footer withNavigation />
                </div>
            </div>
        </div>
    )
}