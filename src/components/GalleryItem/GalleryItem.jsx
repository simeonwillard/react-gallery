import './GalleryItem.css';
import { useState } from 'react';


function GalleryItem({ gallery, likeButton }) {
    const [readDescription, setReadDescription] = useState(false);

    const handleClick = () => {
        setReadDescription(!readDescription);
    }

    const thumbsUp = () => {
        console.log(`you liked ${gallery.description}`);
        likeButton(gallery);
        console.log('this photo has:', gallery.likes);
    }

    return (
        <>
            <section className="section">
                <li className="list"
                    onClick={handleClick}
                >
                    {readDescription
                        ? <p className="description">{gallery.description}</p>
                        : <img src={gallery.path}></img>}
                </li>

                <div>
                    <button
                        className="material-icons likeButton"
                        onClick={thumbsUp}
                    >
                        thumb_up
                    </button>

                    {gallery.likes ? <p>Likes: {gallery.likes}</p> : <p>No Likes</p>}
                </div>
            </section>
        </>
    )
}

export default GalleryItem;