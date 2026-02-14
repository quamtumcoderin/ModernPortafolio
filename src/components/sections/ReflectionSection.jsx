import React from 'react'
import { reflectionData } from '../../data/profileData'
import { useIntersection } from '../../hooks/useIntersection'
import { Terminal, Cpu } from 'lucide-react'

const ReflectionSection = () => {
    const [ref, isVisible] = useIntersection(0.2)

    return (
        <section
            ref={ref}
            id='reflexion'
            className='py-32 bg-gray-900 text-white relative overflow-hidden'
        >
            <div className='absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none'>
                <div className='absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-blob'></div>
                <div className='absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000'></div>
            </div>

            <div className='container mx-auto px-6 relative z-10'>
                <div className='flex flex-col lg:flex-row gap-16 items-center'>

                    <div className='lg:w-2/5'>
                        <div
                            className={`relative transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                        >
                            <div className='absolute -top-20 -left-8 text-blue-400 animation-bounce-slow'>
                                <Terminal size={48} strokeWidth={1.5} />
                            </div>

                            <blockquote className='text-3xl font-light italic leading-tight border-l-4 border-blue-500 pl-6 py-2'>
                                "{reflectionData.quote}"
                            </blockquote>
                            <cite className='block mt-6 text-gray-400 font-mono text-sm tracking-widest uppercase'>
                                - {reflectionData.author}
                            </cite>

                            <div className='mt-12 flex gap-4'>
                                <div className='h-1 w-20 bg-blue-600 rounded-full'></div>
                                <div className='h-1 w-4 bg-gray-600 rounded-full'></div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-3/5 space-y-6'>
                        <h2 className={`text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            {reflectionData.header}
                        </h2>

                        {reflectionData.content.map((paragraph, index) => (
                            <p
                                key={index}
                                className={`text-lg text-gray-300 leading-relaxed transition-all duration-700`}
                                style={{
                                    transitionDelay: `${(index + 2) * 200}ms`,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}

                        <div
                            className={`pt-8 transition-all duration-1000 delay-800 ${
                                isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <Cpu className='text-gray-600 animate-spin-slow' size={32} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReflectionSection