import React from 'react'
import Navbar from '../../../components/Navbar'
import GeneratingContent from '../../../components/GeneratingContent'

export default function GeneratingAd() {
    return (
        <div>
            <Navbar back />
            <GeneratingContent
                title='Sua anúncio está sendo gerado'
                subtitle='Aguarde alguns segundos...'
                steps={3}
            />
        </div>
    )
}
