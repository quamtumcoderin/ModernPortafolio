import React from 'react'

const TimelineItem = ({ item, icon: Icon }) => {
    return (
        <div className='relative pl-8 sm:pl-32 py-6 group'>
            <div className='hidden sm:block absolute left-0 top-6 w-24 text-right'>
                <span className='text-sm font-bold text-blue-600'>{item.date}</span>
            </div>

            <div className='absolute left-0 sm:left-28 top-0 h-full w-px bg-gray-200 group-last:bg-transparent'></div>
            <div className='absolute -left-2 sm:left-26 top-6 w-4 h-4 rounded-full bg-white border-4 border-blue-500 group-hover:animate-bounce-slow transition-all shadow-md z-10'></div>

            <div className='bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                <span className='sm:hidden inline-block mb-2 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full'>
                    {item.date}
                </span>
                <h3 className='text-xl font-bold text-gray-800 flex items-center gap-2'>
                    <Icon className='w-5 h-5 text-gray-500' />
                    {item.title}
                </h3>
                <h4 className='text-md font-medium text-gray-600 mb-3'>{item.entity}</h4>
                <p className='text-gray-500 text-sm leading-relaxed'>{item.description}</p>
            </div>
        </div>
    )
}

export default TimelineItem