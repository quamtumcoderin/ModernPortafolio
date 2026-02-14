import React, { useEffect, useState } from 'react'
import { navLinks } from '../../data/navData'
import { Menu, X, Code2 } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}>
            <div className='container mx-auto px-6 flex justify-between items-center'>

                <a href="#" className='flex items-center gap-2 group'>
                    <div className='bg-blue-600 p-2 rounded-lg group-hover:animate-bounce'>
                        <Code2 className='text-white w-6 h-6' />
                    </div>
                    <span className='font-bold text-xl text-gray-800'>DevProfile</span>
                </a>

                <div className='hidden md:flex gap-8 items-center'>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className='text-gray-600 font-medium hover:text-blue-600 transition-colors relative group'
                        >
                            {link.name}
                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full'></span>
                        </a>
                    ))}
                    <button className='px-5 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-blue-600 transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95'>
                        Contactar
                    </button>
                </div>

                <button
                    className='md:hidden text-gray-600'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isOpen && (
                <div className='md:hidden absolute top-full left-0 w-full bg-white border-t'>
                    <div className='flex flex-col p-4 gap-4'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='text-gray-600 font-medium py-2 hover:text-blue-600 hover:pl-2 transition-all'
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar