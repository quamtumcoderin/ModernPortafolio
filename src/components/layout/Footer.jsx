import React from 'react'
import { socialLinks } from '../../data/navData'

const Footer = () => {
    return (
        <footer className='bg-gray-50 border-t border-gray-200 py-12'>
            <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>

                <div className='text-center md:text-left'>
                    <h4 className='font-bold text-lg text-gray-900'>DevProfile</h4>
                    <p className='text-gray-500 text-sm mt-1'>
                        Arquitectura, Lógica & Código-
                    </p>
                </div>

                <div className='flex gap-4'>
                    {socialLinks.map((item) => {
                        const Icon = item.icon
                        return (
                            <a
                                key={item.name}
                                href={item.url}
                                target='_blank'
                                rel='noreferrer'
                                className='p-3 bg-white rounded-full shadow-sm hover:shadow-md text-gray-600 hover:text-blue-600 transition-all hover:-translate-2'
                            >
                                <Icon size={20} />
                            </a>
                        )
                    })}
                </div>

                <div className='text-gray-400 text-sm'>
                    © {new Date().getFullYear()} - Construido con React & Tailwind
                </div>
            </div>
        </footer>
    )
}

export default Footer