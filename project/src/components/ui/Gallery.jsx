import "./gallery.css"

export default function Gallery() {
    const galleryItems = [
        "https://techgage.com/wp-content/uploads/2021/07/Substance-3D-in-Blender-1200x900-cropped.jpg",
        "https://i.all3dp.com/wp-content/uploads/2022/09/26151527/a-quick-mock-up-of-a-diorama-that-you-can-make-wit-larry-wood-via-all3dp-220811.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVOx9ODRRJVEwCaemEmiHy8inYKvxbA-kBUGDPofATjmBbZODkW0QJeNAM5yGszu9gnQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73RaiSK_2b15RURC-GINuAvSLHYCM9Jd5LijihyW-G3hWE14KAJptNHG5KQYtmAb-2Rs&usqp=CAU",
        "https://www.blender.org/wp-content/uploads/2019/07/modeling02-1280x720.jpg?x12104",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGK9gzmpYKM_dkZx1mu4XTANvucAhoU2o-Db0lEvEduL9dAugqWvxgGN0lwQT5fatKM_s&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJSKMaVTbjTJ4LsxTs4d4sTRbRfE0MR55aw&usqp=CAU"

    ]
    return (
        <div className="container">
            <h2>3D Models</h2>
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