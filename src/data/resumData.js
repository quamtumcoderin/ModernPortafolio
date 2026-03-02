import { Briefcase, GraduationCap, Award, Database, Layout, Server, Terminal } from 'lucide-react'

export const experienceData = [
    {
        id: 1,
        title: 'Atención al Cliente',
        entity: 'Seidor Solutions S.L.',
        date: '2025 - Presente',
        description: 'Gestión de llamdas, incidencias, peticiones y consultas de los clientes.'
    }
]

export const educationData = [
    {
        id: 1,
        title: 'Sistemas Microinformáticos y Redes',
        entity: 'Monlau - La Sagrera',
        date: '2024 - Presente',
        description: 'Bases sólidas en sistemas y redes locales.'
    },
    {
        id: 2,
        title: 'Educación Secundaria Obligatoria',
        entity: 'Institut Joan d\'Austria',
        date: '2021 - 2024',
        description: 'Conocimientos básicos sobre el paquete de Office y edición de imágenes.'
    },
]

export const certificatesData = [
    {
        id: 1,
        title: 'JavaScript: Fundamentos',
        issuer: 'OpenWebinars',
        date: 'Ene 2026',
        url: 'https://openwebinars.net/cert/rd3Z?_gl=1*qj4dat*_gcl_au*MTExMTM4NDQ4My4xNzcyNDQwNjEwLjExMjM5OTUyMTguMTc3MjQ0MDYxNi4xNzcyNDQwNjI2',
        icon: Award
    }
]

export const knowledgeData = [
    { category: 'Frontend', icon: Layout, skills: ['React', 'Tailwind CSS', 'JavaScript', 'CSS', 'HTML'] },
    { category: 'Backend', icon: Server, skills: ['Node.js', 'Express', 'Python'] },
    { category: 'Bases de Datos', icon: Database, skills: ['PostgreSQL', 'MySQL'] },
    { category: 'DevOps & Tools', icon: Terminal, skills: ['Git', 'Docker', 'Linux'] }
]