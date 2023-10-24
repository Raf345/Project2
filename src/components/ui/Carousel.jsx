import { useState } from "react"
import "./carousel.css"

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const items = [
        'https://techmonitor.ai/wp-content/uploads/sites/4/2017/02/shutterstock_552493561.webp', 'https://image.cnbcfm.com/api/v1/image/106884565-1621346132155-gettyimages-1230721734-AUSTRALIA-GOOGLE.jpg?v=1631597289',
        'https://image.cnbcfm.com/api/v1/image/106884565-1621346132155-gettyimages-1230721734-AUSTRALIA-GOOGLE.jpg?v=1631597289',
        'https://gshiftlabs.com/wp-content/uploads/2023/09/g9.jpg',
        'https://cdn.alza.cz/Foto/or/articles/38711/img/google-pixel-7a-uvod.jpg'
    ]

    const prevSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === 0 ? items.length - 1 : prevSlide - 1)
    }
    const nextSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === items.length - 1 ? 0 : prevSlide + 1 )
    }
    return (
        <div className="carousel">
            <div onClick={prevSlide} className="prev-button">
                
            </div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={item} alt="" />
                
                </div>
            ))}
            <div onClick={nextSlide} className="next-button">
                
            </div>
        </div>
    )
}