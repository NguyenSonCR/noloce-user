import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Navigation from '~/layouts/components/Navigation';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <Navigation />
        </div>
    );
}

export default Sidebar;
