import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList ({galleryList, likeButton}) {
    return (
        <>
            {galleryList.map(gallery => {
                return (<GalleryItem key={gallery.id} likeButton={likeButton} gallery={gallery} />)
            })}
        </>
    )
}

export default GalleryList;