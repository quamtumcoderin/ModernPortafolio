import React, { useState } from 'react'
import { activitiesData } from '../../data/activitiesData'
import ActivityCard from '../ui/ActivityCard'
import GalleryModal from '../ui/GalleryModal'

const ActivitiesSection = () => {
    const [selectedActivity, setSelectedActivity] = useState(null)
    const [filter, setFilter] = useState('all')

    const filteredData = activitiesData.filter(item => filter === 'all' ? true : item.category === filter)

    return (
        <section className='py-20 bg-gray-50' id='actividades'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-end mb-12'>
                    <div>
                        <h2 className='text-4xl font-bold text-gray-900 mb-4'>Actividades y Salidas</h2>
                        <p className='text-gray-600 max-w-xl'>
                            El equilibrio entre el mundo digital y el físico. Proyectos, hackathons y escapadas.
                        </p>
                    </div>

                    <div className='flex gap-2 mt-4 md:mt-0 bg-white p-1 rounded-full shadow-sm border border-gray-100'>
                        {['all', 'tech', 'life'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    filter === cat
                                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                    : 'text-gray-500 hover:bg-gray-100'
                                }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredData.map((activity) => (
                        <ActivityCard
                            key={activity.id}
                            activity={activity}
                            onClick={setSelectedActivity}
                        />
                    ))}
                </div>
            </div>

            {selectedActivity && (
                <GalleryModal
                    activity={selectedActivity}
                    onClose={() => setSelectedActivity(null)}
                />
            )}
        </section>
    )
}

export default ActivitiesSection