import React from 'react'
import { knowledgeData } from '../../data/resumData'
import TechBadge from '../ui/TechBadge'
import { useIntersection } from '../../hooks/useIntersection'

const KnowledgeSection = () => {
    const [ref, isVisible] = useIntersection(0.2)

    return (
        <section ref={ref} id='conocimientos' className='py-20 bg-white'>
            <div className='container mx-auto px-6'>
                <h2 className={`text-4xl font-bold text-center mb-16 text-gray-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Stack Tecnológico
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {knowledgeData.map((group, index) => {
                        const Icon = group.icon
                        return (
                            <div 
                                key={index} 
                                className={`p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group`}
                                style={{ 
                                    transitionDelay: `${index * 150}ms`,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                                }}
                            >
                                <div className='flex items-center gap-3 mb-6'>
                                    <div className='p-3 bg-blue-50 rounded-lg group-hover:animate-bounce'>
                                        <Icon className='w-6 h-6 text-blue-600' />
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-800'>{group.category}</h3>
                                </div>
                
                                <div className='flex flex-wrap gap-2'>
                                    {group.skills.map((skill, idx) => (
                                        <TechBadge key={idx} name={skill} />
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default KnowledgeSection