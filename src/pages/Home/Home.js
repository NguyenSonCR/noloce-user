import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLyricPage } from '~/slices/songSlice';
function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLyricPage(false));
        // eslint-disable-next-line
    }, []);

    return <div>Home</div>;
}

export default Home;
