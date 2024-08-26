import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';

export default function ShooseOption() {

    const options: { title: string; Icon: any, description: string }[] = [
        {
            title: "Descrição",
            description: "Gere descrições de produtos",
            Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M8.25 15H15.75M8.25 18H12M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        },
        {
            title: "Anúncios",
            description: "Gere anúncios para seu produto",
            Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3404 15.8398C9.65153 15.7803 8.95431 15.75 8.25 15.75H7.5C5.01472 15.75 3 13.7353 3 11.25C3 8.76472 5.01472 6.75 7.5 6.75H8.25C8.95431 6.75 9.65153 6.71966 10.3404 6.66022M10.3404 15.8398C10.5933 16.8015 10.9237 17.7317 11.3246 18.6234C11.5721 19.1738 11.3842 19.8328 10.8616 20.1345L10.2053 20.5134C9.6539 20.8318 8.9456 20.6306 8.67841 20.0527C8.0518 18.6973 7.56541 17.2639 7.23786 15.771M10.3404 15.8398C9.95517 14.3745 9.75 12.8362 9.75 11.25C9.75 9.66379 9.95518 8.1255 10.3404 6.66022M10.3404 15.8398C13.5 16.1124 16.4845 16.9972 19.1747 18.3749M10.3404 6.66022C13.5 6.3876 16.4845 5.50283 19.1747 4.12509M19.1747 4.12509C19.057 3.74595 18.9302 3.37083 18.7944 3M19.1747 4.12509C19.7097 5.84827 20.0557 7.65462 20.1886 9.51991M19.1747 18.3749C19.057 18.7541 18.9302 19.1292 18.7944 19.5M19.1747 18.3749C19.7097 16.6517 20.0557 14.8454 20.1886 12.9801M20.1886 9.51991C20.6844 9.93264 21 10.5545 21 11.25C21 11.9455 20.6844 12.5674 20.1886 12.9801M20.1886 9.51991C20.2293 10.0913 20.25 10.6682 20.25 11.25C20.25 11.8318 20.2293 12.4087 20.1886 12.9801" stroke="#171717" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            title: "Personas",
            description: "Gere personas e público-alvo",
            Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 9H18.75M15 12H18.75M15 15H18.75M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5ZM10.5 9.375C10.5 10.4105 9.66053 11.25 8.625 11.25C7.58947 11.25 6.75 10.4105 6.75 9.375C6.75 8.33947 7.58947 7.5 8.625 7.5C9.66053 7.5 10.5 8.33947 10.5 9.375ZM11.7939 15.7114C10.8489 16.2147 9.77021 16.5 8.62484 16.5C7.47948 16.5 6.40074 16.2147 5.45581 15.7114C5.92986 14.4207 7.16983 13.5 8.62484 13.5C10.0799 13.5 11.3198 14.4207 11.7939 15.7114Z" stroke="#171717" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            title: "Nomes",
            description: "Gere nomes para seu produtos",
            Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.56802 3H5.25C4.00736 3 3 4.00736 3 5.25V9.56802C3 10.1648 3.23705 10.7371 3.65901 11.159L13.2401 20.7401C13.9388 21.4388 15.0199 21.6117 15.8465 21.0705C17.9271 19.7084 19.7084 17.9271 21.0705 15.8465C21.6117 15.0199 21.4388 13.9388 20.7401 13.2401L11.159 3.65901C10.7371 3.23705 10.1648 3 9.56802 3Z" stroke="#171717" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
                <path d="M6 6H6.0075V6.0075H6V6Z" stroke="#171717" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
            </svg>
        }
    ]

    return (
        <div>
            <Navbar title="Início" />
            <div className='w-full p-6 pt-3 flex flex-col items-center gap-y-3'>
                <h3 className='text-2xl font-semibold max-w-[15rem] text-center'>Olá, Junio.
                    O que vamos criar?</h3>
                <p className='text-sm text-neutral-500'>Selecione uma opção para começarmos.</p>
                <div className='grid grid-cols-2 gap-6 pt-3'>
                    {
                        options.map((option) => (
                            <div role='button' className='border rounded-lg w-full p-3 border-border-line hover:border-main-primary' key={option.title}>
                                {option.Icon}
                                <div className='pt-3 space-y-2'>
                                    <h3 className='text-xl font-medium'>{option.title}</h3>
                                    <p className='text-sm text-neutral-500'>{option.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}


