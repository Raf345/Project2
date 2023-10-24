import "./gallery.css"

export default function Gallery() {
    const galleryItems = [
        'https://media.wired.co.uk/photos/606d9a3ba876dd2203a639aa/1:1/w_2000,h_2000,c_limit/wired-uk-google-watching.jpg',
        'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/01/google_stock.jpeg.jpg',
        'https://www.google.com/chrome/static/images/home-experiment/hero-img_desktop.png',
        'https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/01/google-photos-motion-hero.jpg',
        'https://ichef.bbci.co.uk/news/660/cpsprodpb/D1A5/production/_116396635_google-cookies.jpg',
        'https://cdn.pixabay.com/photo/2013/01/29/22/07/google-76659_640.png',

    ]
    return (
        <div className="container">
            <h2>Image Gallery</h2>
            <div className="gallery-wrapper">
                {
                    galleryItems.map((item) => {
                       return (<img className="gallery-item" src={item} />)
                    })
                }
            </div>
        </div>
    )
}