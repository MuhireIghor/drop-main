import React from 'react'
import Navbar from '../../../components/Navbar'
import GeneratingContent from '../../../components/GeneratingContent'

export default function GeneratingProductDescription() {
    return (
        <div>
            <Navbar back />
            <GeneratingContent
                title='Sua descrição está sendo gerada'
                subtitle='Aguarde alguns segundos...'
                steps={4}
            />
        </div>
    )
}
