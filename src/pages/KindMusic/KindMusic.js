import styles from './KindMusic.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/img';
import SongConcept from '~/layouts/components/SongConcept';

const cx = classNames.bind(styles);

function KindMusic() {
    return (
        <div className={cx('wrapper')}>
            <SongConcept title={'Nhạc trữ tình'} />
            <SongConcept title={'Remix'} />
            <SongConcept title={'Acoustic'} />
        </div>
    );
}

export default KindMusic;
