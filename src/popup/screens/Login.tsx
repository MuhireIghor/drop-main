import React, { ElementRef, useRef, useState } from 'react';
import Logo from '../../components/Logo';
import LoadingSpinner from '../../components/LoadingSpinner';
import Footer from '../../components/Footer';
import { useRecoilState } from 'recoil';
import { activeTabState } from '../../atoms';

export default function Login() {
    const formRef = useRef<ElementRef<'form'>>(null);
    const [loading, setLoading] = useState(false);
    const [, setActiveTab] = useRecoilState(activeTabState);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('form submitted');
        e.preventDefault();
        const form = new FormData(formRef.current);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }
            , 2000);
    }

    return (
        <div>
            <div className='w-full flex justify-between px-5 py-3 border-b'>
                <Logo />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2803 11.4697C16.5732 11.7626 16.5732 12.2374 16.2803 12.5303L8.78033 20.0303C8.48744 20.3232 8.01256 20.3232 7.71967 20.0303C7.42678 19.7374 7.42678 19.2626 7.71967 18.9697L14.6893 12L7.71967 5.03033C7.42678 4.73744 7.42678 4.26256 7.71967 3.96967C8.01256 3.67678 8.48744 3.67678 8.78033 3.96967L16.2803 11.4697Z" fill="#171717" />
                </svg>
            </div>
            <div className='p-6 space-y-10 flex flex-col justify-between h-full'>
                <div className='rounded-xl border border-border-line w-full flex flex-col items-center gap-y-4 p-6  h-full min-h-24'>
                    <div className='p-4 rounded-full bg-[#E9EBED] text-main-primary '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 1C7.51472 1 5.5 3.01472 5.5 5.5V9H5C3.89543 9 3 9.89543 3 11V17C3 18.1046 3.89543 19 5 19H15C16.1046 19 17 18.1046 17 17V11C17 9.89543 16.1046 9 15 9H14.5V5.5C14.5 3.01472 12.4853 1 10 1ZM13 9V5.5C13 3.84315 11.6569 2.5 10 2.5C8.34315 2.5 7 3.84315 7 5.5V9H13Z" fill="#705CF6" />
                        </svg>
                    </div>
                    <h2 className='text-2xl font-medium'>Fazer Login</h2>
                    <p className='text-neutral-500 text-sm'><span>Não tem uma conta? </span><span className='text-main-primary'>Criar Conta</span></p>
                    <form
                        onSubmit={handleFormSubmit}
                        className='space-y-6 w-full'
                    >
                        <TextInput type='text' label='Nome' placeholder='Seu nome' />
                        <TextInput type='email' label='Email' placeholder='Seu e-mail' />
                        <button
                            type='submit'
                            disabled={loading}
                            className='w-full text-center text-white bg-main-primary text-sm font-medium py-3 rounded-xl'
                        >
                            {loading ? <LoadingSpinner /> : <span>Fazer Login</span>}
                        </button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}


interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const TextInput = ({ label, name, ...props }: TextInputProps) => {
    return (
        <div className='space-y-2'>
            <label htmlFor={name} className='text-sm text-neutral-400'>{label}</label>
            <input type='text' name={name}  {...props} className='w-full outline-none rounded-lg border-[#E9EBED] border py-3 bg-main-background px-4 placeholder:text-neutral-400 focus:border-main-primary' />
        </div>
    )
}