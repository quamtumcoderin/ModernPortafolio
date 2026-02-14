import { useState, useEffect, useRef } from 'react'

export const useIntersection = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold }
        )

        const currentElement = elementRef.current
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) observer.unobserve(currentElement)
        }
    }, [threshold])

    return [elementRef, isVisible]
}