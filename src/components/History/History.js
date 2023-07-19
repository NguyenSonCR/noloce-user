import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { putHistory, backHistory, nextHistory, setCouter } from '~/slices/historySlice';
const cx = classNames.bind(styles);

function History() {
    const historyState = useSelector((state) => state.history);
    const { history, counter } = historyState;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [condition, setCondition] = useState(true);

    useEffect(() => {
        if (condition) dispatch(putHistory(pathname));
        // eslint-disable-next-line
    }, [pathname]);

    const handleBackHistory = () => {
        if (history.length > 1 && counter !== 1) {
            setCondition(false);
            dispatch(backHistory());
            navigate(history[counter - 2]);
        }
    };

    const handleNextHistory = () => {
        if (counter < history.length && counter > 0) {
            setCondition(false);
            dispatch(nextHistory());
            navigate(history[counter]);
        }
    };

    // function useHistoryStack() {
    //     const [stack, setStack] = useState([]);
    //     const { pathname } = useLocation();
    //     const type = useNavigationType();

    //     useEffect(() => {
    //         if (type === 'POP') {
    //             setStack((prev) => prev.slice(0, prev.length - 1));
    //         } else if (type === 'PUSH') {
    //             setStack((prev) => [...prev, pathname]);
    //         } else {
    //             setStack((prev) => [...prev.slice(0, prev.length - 1), pathname]);
    //         }
    //     }, [pathname, type]);

    //     return stack;
    // }

    return (
        <div className={cx('navigate')}>
            <BsArrowLeft
                className={cx('navigate-icon', history.length > 1 && counter !== 1 && 'active')}
                onClick={(e) => {
                    e.stopPropagation();
                    handleBackHistory();
                }}
            />
            <BsArrowRight
                className={cx('navigate-icon', counter < history.length && counter > 0 && 'active')}
                onClick={(e) => {
                    e.stopPropagation();
                    handleNextHistory();
                }}
            />
        </div>
    );
}

export default History;
