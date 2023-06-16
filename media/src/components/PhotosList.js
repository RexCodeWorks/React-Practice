import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import PhotoListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

function PhotosList({ album }) {
    const { data, isFetching, error } = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    let content;
    if (isFetching) {
        content = <Skeleton className="h-8 w-8" times={4} />;
    } else if (error) {
        content = <div>Error fetching photo</div>;
    } else {
        content = data.map((photo) => {
            return <PhotoListItem photo={photo} key={photo.id} />;
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>
        </div>
    );
}

export default PhotosList;