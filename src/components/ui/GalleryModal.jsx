import React from 'react'
import { X } from 'lucide-react'

const GalleryModal = ({ activity, onClose }) => {
    if (!activity) return null

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div
                className='absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0-3s_ease-out]'
                onClick={onClose}
            >
                
                <div className='relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden animate-[popIn_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)]'>

                    <button
                        onClick={onClose}
                        className='absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-all hover:rotate-90'
                    >
                        <X className='text-white w-6 h-6' />
                    </button>

                    <div className='h-64 md:h-80 relative'>
                        <img
                            src={activity.cover}
                            alt={activity.title}
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full'>
                            <h2 className='text-3xl font-bold text-white'>{activity.title}</h2>
                            <p className='text-gray-300'>{activity.date}</p>
                        </div>
                    </div>

                    <div className='p-8'>
                        <p className='text-gray-700 text-lg leading-relaxed mb-6'>
                            {activity.desc}
                        </p>

                        {activity.images && activity.images.length > 0 && (
                            <div className='grid grid-cols-3 gap-2 mt-4'>
                                {activity.images.map((img, idx) => (
                                    <img key={idx} src={img} className='rounded-lg h-24 w-full object-cover hover:opacity-80 transition-opacity' alt="" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryModal