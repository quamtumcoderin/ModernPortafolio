import React from 'react'
import { dafoData } from '../../data/profileData'
import BouncyCard from '../ui/BouncyCard'
import { useIntersection } from '../../hooks/useIntersection'
import { ShieldCheckIcon, BellAlertIcon, ArrowTrendingUpIcon, BoltIcon } from '@heroicons/react/16/solid'

const DafoSection = () => {
    const [ref, isVisible] = useIntersection()

    return (
        <section ref={ref} id='dafo' className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <h2 className={`text-4xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Análisis DAFO
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {dafoData.strengths.map(item => (
                        <BouncyCard
                            key={item.id}
                            title={item.title}
                            description={item.desc}
                            icon={ShieldCheckIcon}
                            type='success'
                        />
                    ))}
                    {dafoData.weaknesses.map(item => (
                        <BouncyCard
                            key={item.id}
                            title={item.title}
                            description={item.desc}
                            icon={BellAlertIcon}
                            type='warning'
                        />
                    ))}
                    {dafoData.oppotunities.map(item => (
                        <BouncyCard
                            key={item.id}
                            title={item.title}
                            description={item.desc}
                            icon={ArrowTrendingUpIcon}
                            type='default'
                        />
                    ))}
                    {dafoData.threats.map(item => (
                        <BouncyCard
                            key={item.id}
                            title={item.title}
                            description={item.desc}
                            icon={BoltIcon}
                            type='danger'
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DafoSection