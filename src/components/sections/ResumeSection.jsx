import React from 'react'
import { educationData, experienceData } from '../../data/resumData'
import TimelineItem from '../ui/TimelineItem'
import { useIntersection } from '../../hooks/useIntersection'
import { Briefcase, GraduationCap } from 'lucide-react'

const ResumeSection = () => {
    const [ref, isVisible] = useIntersection(0.1)

    return (
        <section ref={ref} id='trayectoria' className='py-20 bg-gray-50'>
            <div className='container mx-auto px-6'>
                <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className='text-4xl font-bold text-center mb-16 text-gray-900'>Trayectoria</h2>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        <div>
                            <div className='flex items-center gap-3 mb-8'>
                                <Briefcase className='w-8 h-8 text-blue-600' />
                                <h3 className='text-2xl font-bold text-gray-800'>Experiencia Laboral</h3>
                            </div>
                            <div className='space-y-0'>
                                {experienceData.map(item => (
                                    <TimelineItem key={item.id} item={item} icon={Briefcase} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center gap-3 mb-8'>
                                <GraduationCap className='w-8 h-8 text-blue-600' />
                                <h3 className='text-2xl font-bold text-gray-800'>Formación Académica</h3>
                            </div>
                            <div className='space-y-0'>
                                {educationData.map(item => (
                                    <TimelineItem key={item.id} item={item} icon={GraduationCap} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeSection