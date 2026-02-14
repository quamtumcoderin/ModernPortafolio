import React from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from 'recharts'

const SkillsRadar = ({ data }) => {
    return (
        <div className='w-full h-[400px] animate-float'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke='#e5e7eb' />

                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 'bold' }}
                    />

                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />

                    <Radar
                        name='Nivel'
                        dataKey="value"
                        stroke='#2563eb'
                        strokeWidth={3}
                        fill='#3b82f6'
                        fillOpacity={0.4}
                        isAnimationActive={true}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SkillsRadar