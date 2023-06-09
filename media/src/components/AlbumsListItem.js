import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleClick = () => {
        removeAlbum(album);
    }

    const header = <>
        <Button loading={results.isLoading} className="mr-2" onClick={handleClick}>
            <GoTrashcan />
        </Button>
        {album.title}
    </>;


    return (
        <ExpandablePanel header={header} key={album.id}>
            <PhotosList album={album} />
        </ExpandablePanel>
    );
}

export default AlbumsListItem;