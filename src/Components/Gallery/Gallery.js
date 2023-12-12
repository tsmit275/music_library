import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext"
import GalleryItem from './GalleryItem'

function Gallery () {
    const data = useContext(DataContext)
    
    const display = data.map(item => {
        return <GalleryItem key={item.trackId} item={item} />
    }) 
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery