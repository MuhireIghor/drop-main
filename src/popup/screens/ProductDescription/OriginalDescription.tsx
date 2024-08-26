import React from 'react'
import Navbar from '../../../components/Navbar'
import MultiStepIndicator from '../../../components/MultiStepIndicator'
import Footer from '../../../components/Footer'
import DescriptionContainer from '../../../components/DescriptionContainer'
import Breadcrumbs from '../../../components/Breadcrumbs'

export default function OriginalDescription() {
    return (
        <div className='w-full h-full'>
            <Navbar back />
            <Breadcrumbs items={[
                { label: "Descrição", screen: '' },
            ]} />
            <div className='px-4 pt-3'>
                <MultiStepIndicator steps={4} activeStep={1} />
                <DescriptionContainer
                    title='Qual é a descrição original do produto?'
                    subtitle='Cole abaixo a descrição original'
                    capture
                />
                <div>
                    <Footer withNavigation />
                </div>
            </div>
        </div>
    )
}
