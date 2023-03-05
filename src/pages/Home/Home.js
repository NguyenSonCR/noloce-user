import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setLyricPage } from '~/slices/songSlice';
function Home() {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);

    console.log(authState);
    useEffect(() => {
        dispatch(setLyricPage(false));
    }, []);

    return <div>Home page</div>;
}

export default Home;
