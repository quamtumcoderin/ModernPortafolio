const HeroSection = () => {
    return (
        <section id='hero' className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20'>
            <div className='flex flex-col items-center px-4 animate-float'>
                <img className="rounded-full md:w-86 w-64 transition-all duration-300" src="/images/profile.png" alt="Yo Mismo (Aún no)" />
                <h1 className='text-5xl md:text-7xl font-bold text-gray-900 mb-6'>
                    Hola, soy <span className='text-blue-600'>Elder Estrada</span>
                </h1>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>
                    No solo desarrollo webs. Construyo soluciones modulares, escalables y optimizadas.
                </p>
                <div className='flex gap-4 justify-center'>
                    <a href="#dafo" className='px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-blue-500/50'>
                        Ver Análisis
                    </a>
                    <a href="#actividades" className='px-8 py-3 bg-white text-gray-900 rounded-full font-bold border border-gray-200  hover:border-blue-200 transition-all hover:-translate-y-1'>
                        Ver Proyectos
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection