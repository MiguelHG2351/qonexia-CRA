import { useEffect, useState } from 'react'
import API from '../public/data/carrousel.json'

function useCarrousel (reference) {
    const [images, setImages] = useState(0)
    useEffect(() => {
        const card = reference.current
        const interval = setTimeout(() => {
            switch (images) {
            case 0:
                card.src = API[1].url
                card.style.transform = 'translate(0, 0)'
                setImages(1)
                break
            case 1:
                card.src = API[2].url
                card.style.transform = 'translate(0, 0)'
                setImages(2)
                break
            case 2:
                card.src = API[3].url
                card.style.transform = 'translate(0, 0)'
                setImages(3)
                break
            case 3:
                card.src = API[4].url
                card.style.transform = 'translate(0, 0)'
                setImages(4)
                break
            case 4:
                card.src = API[5].url
                card.style.transform = 'translate(0, 0)'
                setImages(5)
                break
            case 5:
                card.src = API[6].url
                card.style.transform = 'translate(0, 0)'
                setImages(6)
                break
            case 6:
                card.src = API[7].url
                card.style.transform = 'translate(0, 0)'
                setImages(7)
                break
            case 7:
                card.src = API[8].url
                card.style.transform = 'translate(0, 0)'
                setImages(8)
                break
            case 8:
                setImages(1)
                break
            default:
                console.log('Ha ocurrido un error')
            }
        }, 3000)
        setTimeout(() => {
            card.style.transform = 'translate(3000px, 0)'
        }, 2500)
        return () => clearInterval(interval) // eslint-disable-next-line
    }, [images])

}

export default useCarrousel
