import React from 'react'
import { certificatesData } from '../../data/resumData'
import { useIntersection } from '../../hooks/useIntersection'
import { ExternalLink } from 'lucide-react'

const CertificatesSection = () => {
    const [ref, isVisible] = useIntersection(0.2)

    return (
        <section ref={ref} id='certificados' className='py-20 bg-gray-50'>
            <div className='container mx-auto px-6'>
                <h2 className={`text-4xl font-bold text-center mb-16 text-gray-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Certificaciones
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
                    {certificatesData.map((cert, index) => {
                        const Icon = cert.icon
                        return (
                            <a 
                                key={cert.id}
                                href={cert.url}
                                target='_blank'
                                rel='noreferrer'
                                className={`group relative p-6 bg-white rounded-2xl border-2 border-transparent hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block`}
                                style={{ 
                                    transitionDelay: `${index * 200}ms`,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                                }}
                            >
                                <div className='flex justify-between items-start mb-4'>
                                    <div className='p-3 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors'>
                                        <Icon className='w-6 h-6 text-gray-600 group-hover:text-blue-600 group-hover:animate-bounce' />
                                    </div>
                                    <ExternalLink className='w-5 h-5 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity' />
                                </div>
                
                                <h3 className='font-bold text-lg text-gray-800 mb-1'>{cert.title}</h3>
                                <p className='text-gray-500 text-sm mb-3'>{cert.issuer}</p>
                                <span className='text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md'>
                                    {cert.date}
                                </span>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CertificatesSection