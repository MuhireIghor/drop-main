import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import Footer from '../../../components/Footer'
import MultiStepIndicator from '../../../components/MultiStepIndicator'
import Navbar from '../../../components/Navbar'
import { FlashIcon } from '../../../assets/icons'

export default function ProductName() {
    return (
        <div className='w-full h-full'>
            <Navbar back />
            <Breadcrumbs items={[
                { label: "Descrição", screen: '' },
                { label: "Nome do produto", screen: '' }
            ]} />
            <div className='px-4 pt-3'>
                <MultiStepIndicator steps={4} activeStep={2} />
                <div className='py-6  border-border-line space-y-3'>
                    <h3 className='text-2xl font-semibold'>Qual o nome do produto?</h3>
                    <p className='text-sm text-neutral-500'>Esse nome aparecerá na descrição do produto.</p>
                    <input
                        placeholder='Digite alguma coisa...'
                        className='placeholder:text-neutral-400 placeholder:text-sm tracking-[-0.14px] w-full p-3  border rounded-lg outline-none bg-main-background focus:ring-1 ring-main-primary'
                    />
                </div>

                <div className='space-y-4'>
                    <div className='flex items-center gap-x-2'>
                        <FlashIcon />
                        <span className='font-medium text-sm text-neutral-400'>Sugestões rápidas</span>
                    </div>
                    <div className='w-3/4 flex flex-wrap gap-2'>
                        {
                            ["EcoBag Inteligente,", "Café Gourmet,", "Luminária Solar,", "Kit Hidratação Capilar,", "Tênis Conforto Urbano,", "Carregador Solar Portátil"].map(itm => (
                                <span key={itm} className='text-main-primary text-xs font-medium'>{itm}</span>
                            ))
                        }
                    </div>
                </div>

                <div className='pt-6'>
                    <Footer withNavigation />
                </div>
            </div>
        </div>
    )
}
