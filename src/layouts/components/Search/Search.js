import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('input')} placeholder="Tìm kiếm " spellCheck={false}></input>

            <FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} />

            {false && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            <div className={cx('split')}></div>
            <div className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-btn-icon')} />
            </div>
        </div>
    );
}

export default Search;
