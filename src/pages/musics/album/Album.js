import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SongItem from '~/layouts/components/SongItem';
import { getAlbum } from '~/slices/songSlice';
import musicApi from '~/api/music/musicApi';

function Album() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const songState = useSelector((state) => state.song);
    useEffect(() => {
        musicApi.getAlbumZing(id).then((response) => {
            dispatch(getAlbum(response.data));
        });
    }, []);
    let body = null;

    if (songState.album) {
        body = (
            <div>
                <SongItem songList={songState.album.song.items} />
            </div>
        );
    }

    return body;
}

export default Album;
