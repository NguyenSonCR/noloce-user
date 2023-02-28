import classNames from 'classnames/bind';
import styles from './Model.module.scss';
import { TfiClose } from 'react-icons/tfi';

const cx = classNames.bind(styles);
function Model({ children, onSetModel }) {
    return (
        <div className={cx('model')}>
            <div className={cx('container')}>
                <div className={cx('btn-close')} onClick={() => onSetModel(false)}>
                    <TfiClose className={cx('icon')} />
                </div>
                {children}
            </div>
        </div>
    );
}

export default Model;
