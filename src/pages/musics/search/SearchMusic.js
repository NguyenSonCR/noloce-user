import { useSelector } from 'react-redux';
import SongItem from '~/layouts/components/SongItem';

function SearchMusic() {
    const songState = useSelector((state) => state.song);
    return <div>{songState.searchResult && <SongItem songList={songState.searchResult.songs} />}</div>;
}

export default SearchMusic;
