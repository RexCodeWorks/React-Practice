import './ImageList.css'
import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderedImages = images.map((images) => {
        return <ImageShow key={images.id} image={images} />
    });

    return <div className='image-list'>{renderedImages}</div>;
}

export default ImageList;