import React from 'react'
import { softSkillsData, skillsDescription } from '../../data/skillsData'
import SkillsRadar from '../ui/SkillsRadar'
import { useIntersection } from '../../hooks/useIntersection'

const SoftSkillsSection = () => {
    const [ref, isVisible] = useIntersection(0.3)

    return (
        <section ref={ref} className='py-24 bg-white overflow-hidden' id='skills'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col lg:flex-row items-center gap-12'>

                    <div
                        className={`lg:w-1/2 transition-all duration-700 delay-100 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                        }`}
                    >
                        <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                            {skillsDescription.title}
                        </h2>
                        <h3 className='text-xl text-blue-600 font-semibold mb-6'>
                            {skillsDescription.subtitle}
                        </h3>
                        <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                            {skillsDescription.text}
                        </p>

                        <div className='grid grid-cols-2 gap-2'>
                            <div className='p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 hover:animate-pulse'>
                                <span className='block font-bold text-gray-800'>Metodologías</span>
                                <span className='text-sm text-gray-500'>Agile / Scrum / Kanban</span>
                            </div>
                            <div className='p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500 hover:animate-pulse'>
                                <span className='block font-bold text-gray-800'>Idiomas</span>
                                <span className='text-sm text-gray-500'>Español / Inglés C1</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`lg:w-1/2 w-full flex justify-center transition-all duration-1000 delay-300 ${
                            isVisible
                                ? 'opacity-100 scale-100 rotate-0'
                                : 'opacity-0 scale-50 rotate-12'
                        }`}
                    >
                        <div className='relative w-full max-w-lg'>
                            <div className='absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'></div>
                            <div className='absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000'></div>

                            <div className='relative bg-white/50 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-4'>
                                <SkillsRadar data={softSkillsData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SoftSkillsSection