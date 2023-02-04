import { useSelector } from 'react-redux';
import Audio from '~/layouts/components/Audio';
function Home() {
    const songState = useSelector((state) => state.song);
    return (
        <div>
            Home page
            {songState.song && <Audio />}
        </div>
    );
}

export default Home;
