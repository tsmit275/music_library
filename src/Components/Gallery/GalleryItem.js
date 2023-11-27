import { useState } from "react"

function GalleryItem () {
    const [view, setView] = useState(false)

    return (
        <div onClick={(e) => setView(!view)} style={{ display: 'inline-block' }}> 
        <p>Gallery Item</p>

        </div>
    )

}

export default GalleryItem