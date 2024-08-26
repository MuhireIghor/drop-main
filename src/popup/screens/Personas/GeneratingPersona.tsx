import React from 'react'
import Navbar from '../../../components/Navbar'
import GeneratingContent from '../../../components/GeneratingContent'

export default function GeneratingPersona() {
    return (
        <div>
            <Navbar back />
            <GeneratingContent
                steps={3}
                title='Sua persona está sendo gerada'
                subtitle='Aguarde alguns segundos...'
            />
        </div>
    )
}
