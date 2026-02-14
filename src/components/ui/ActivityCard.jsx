import React from 'react'

const ActivityCard = ({ activity, onClick }) => {
    return (
        <div
            onClick={() => onClick(activity)}
            className='group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg'
        >
            <img
                src={activity.cover}
                alt={activity.title}
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90' />

            <div className='absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:-translate-y-2'>
                <span className='inline-block px-3 py-1 mb-2 text-xs font-bold text-white bg-blue-600 rounded-full'>
                    {activity.category.toUpperCase()}
                </span>
                <h3 className='text-xl font-bold text-white mb-1'>{activity.title}</h3>
                <p className='text-gray-300 text-sm line-clamp-2'>{activity.desc}</p>
            </div>
        </div>
    )
}

export default ActivityCard