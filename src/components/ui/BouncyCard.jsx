import React from 'react'

const BouncyCard = ({ title, description, icon: Icon, type = 'default' }) => {
    const variants = {
        default: 'border-gray-200 hover:border-blue-500',
        success: 'border-green-200 hover:border-green-500 bg-green-50/50',
        warning: 'border-yellow-200 hover:border-yellow-500 bg-yellow-50/50',
        danger: 'border-red-200 hover:border-red-500 bg-red-50/50',
    }

    return (
        <div className={`
            p-6 rounded-xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default group ${variants[type] || variants.default}
        `}>
            <div className='flex items-center gap-4 mb-3'>
                {Icon && (
                    <div className='p-3 rounded-full bg-white shadow-sm group-hover:animate-bounce'>
                        <Icon className='w-6 h-6 text-gray-700' />
                    </div>
                )}
                <h3 className='font-bold text-xl text-gray-800'>{title}</h3>
            </div>
            <p className='text-gray-600 leading-relaxed text-sm'>
                {description}
            </p>
        </div>
    )
}

export default BouncyCard