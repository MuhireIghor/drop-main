import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import Footer from '../../../components/Footer'
import MultiStepIndicator from '../../../components/MultiStepIndicator'
import Navbar from '../../../components/Navbar'
import { FemaleIcon, MaleIcon } from '../../../assets/icons'


const genders: {
  name: string;
  description: string;
  icon: JSX.Element
}[] = [
    {
      name: "Homens",
      description: "Meu produto é para Homens",
      icon: <MaleIcon />
    },
    {
      name: "Mulheres",
      description: "Meu produto é para Mulheres",
      icon: <FemaleIcon />
    }
  ]

export default function SelectGender() {
  return (
    <div className='w-full h-full'>
      <Navbar back />
      <Breadcrumbs items={[
        { label: "Descrição", screen: '' },
        { label: "Público-Alvo", screen: '' }
      ]} />
      <div className='px-4 pt-3'>
        <MultiStepIndicator steps={4} activeStep={3} />
        <div className='py-6  border-border-line space-y-3'>
          <h3 className='text-2xl font-semibold'>Para quem é esse produto?</h3>
          <p className='text-sm text-neutral-500'>Selecione uma das opções abaixo ou ambas, se preferir.</p>
        </div>
        <div className='flex w-full gap-4 '>
          {
            genders.map(gender => (
              <div role='button' className='border border-border-line rounded-lg hover:border-main-primary p-4 px-6'>
                {gender.icon}
                <h4 className='text-xl pt-4 font-medium text-neutral-900'>{gender.name}</h4>
                <p className='text-sm text-neutral-500'>{gender.description}</p>
              </div>
            ))
          }
        </div>
        <div className='pt-6'>
          <Footer withNavigation continueLabel='Continuar e Gerar' />
        </div>
      </div>
    </div>
  )
}