import React from 'react'

const TechBadge = ({ name }) => {
    return (
        <div className='px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white hover:shadow-md cursor-default'>
            {name}
        </div>
    )
}

export default TechBadge