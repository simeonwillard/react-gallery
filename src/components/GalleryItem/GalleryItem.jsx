import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem({gallery, likeButton}) {
    const [readDescription, setReadDescription] = useState(false);
    // const [likeCount, setLikeCount] = useState(gallery.likes);

    const handleClick = () => {
        setReadDescription(!readDescription);
    }

    const thumbsUp = () => {
        console.log(`you liked ${gallery.description}`);
        // setLikeCount(likeCount + 1);
        console.log(likeButton());
        // likeButton(gallery);
        console.log(gallery.likes);
    }

    return (
        <>
            <section className="section">
                <li className="list" onClick={handleClick}>{readDescription
                    ? <p className="description">{gallery.description}</p>
                    : <img src={gallery.path}></img>}</li>
                <div><button onClick={thumbsUp}>Like</button></div>
            </section>
        </>
    )
}

export default GalleryItem;