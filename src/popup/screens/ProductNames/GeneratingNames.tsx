import React from 'react'
import Navbar from '../../../components/Navbar'
import GeneratingContent from '../../../components/GeneratingContent'

export default function GeneratingNames() {
    return (
        <div>
            <Navbar back />
            <GeneratingContent
                steps={2}
                title='Sua lista de nomes está sendo gerada'
                subtitle='Aguarde alguns segundos...'
            />
        </div>
    )
}
