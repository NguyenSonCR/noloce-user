import { faCheck, faXmark, faInfo, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Toast.module.scss';
import { deleteToast } from '~/slices/toastSlice';

const cx = classNames.bind(styles);

function Toast() {
    const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    const toastState = useSelector((state) => state.toast);
    const icons = {
        success: <FontAwesomeIcon icon={faCheck} />,
        info: <FontAwesomeIcon icon={faInfo} />,
        warning: <FontAwesomeIcon icon={faExclamation} />,
        error: <FontAwesomeIcon icon={faXmark} />,
    };

    const dispatch = useDispatch();
    const handleDeleteToast = useCallback(
        (id) => {
            dispatch(deleteToast(id));
        },
        // eslint-disable-next-line
        [toastState.toastList],
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastState.toastList.length) {
                dispatch(deleteToast(toastState.toastList[0].id));
            }
        }, 2000);
        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line
    }, [toastState.toastList]);

    return (
        <div className={cx('wrapper')}>
            {toastState.toastList.length > 0 &&
                toastState.toastList.map((toast, index) => {
                    const { id, title, type, content } = toast;
                    return (
                        <div key={index} className={cx('toast', 'mobile', type)}>
                            <div className={cx('toast__icon')}>{icons[type]}</div>
                            <div className={cx('toast__body')}>
                                {width > 740 && (
                                    <div className={cx('toast__title')}>
                                        <p>{title}</p>
                                    </div>
                                )}
                                <div className={cx('toast__msg')}>
                                    <p>{content}</p>
                                </div>
                            </div>
                            <div
                                className={cx('toast__close')}
                                onClick={() => {
                                    handleDeleteToast(id);
                                }}
                            >
                                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Toast;
