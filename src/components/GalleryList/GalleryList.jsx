import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList ({galleryList}) {
    return (
        <>
            {galleryList.map(gallery => {
                return (<GalleryItem key={gallery.id} gallery={gallery} />)
            })}
        </>
    )
}

export default GalleryList;