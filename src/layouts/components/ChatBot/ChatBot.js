import classNames from 'classnames/bind';
import styles from './ChatBot.module.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import images from '~/assets/img';
import ModelChat from './ModelChat';
import ModelLogin from './ModelLogin';
import { updatedUser, setFormShow } from '~/slices/authSlice';
import { socket } from '~/socket';

const cx = classNames.bind(styles);
function ChatBot() {
    const userState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [notify, setNotify] = useState(0);
    const [newMessage, setNewMessage] = useState(false);
    const [events, setEvents] = useState([]);

    const handleClickIcon = () => {
        dispatch(setFormShow('model'));
    };

    useEffect(() => {
        if (userState.isAuthenticated) {
            socket.connect();
            socket.emit('addUser', userState.user.username);
        } else {
            socket.disconnect();
        }

        // eslint-disable-next-line
    }, [userState?.user]);

    useEffect(() => {
        if (userState.isAuthenticated) {
            const newMess = userState.user.message.reduce((total, mess) => {
                if (mess.username === 'admin' && mess.seen === false) {
                    return total + 1;
                } else {
                    return 0;
                }
            }, 0);
            setNotify(newMess);
        }
    }, [userState]);

    useEffect(() => {
        function onGetMessage(newUser) {
            setEvents(events.concat(newUser));
            if (newUser) dispatch(updatedUser(newUser));
        }
        socket.on('getMessage', onGetMessage);
        // setNewMessage(true));

        return () => {
            socket.off('getMessage', onGetMessage);
        };
        // eslint-disable-next-line
    }, [events]);

    return (
        <div className={cx('wrapper')}>
            {userState?.formShow === 'icon' ? (
                <div className={cx('icon-chat')} onClick={handleClickIcon}>
                    {notify !== 0 && <div className={cx('notify')}> {notify} </div>}
                    <img alt="" className={cx('chat-image')} src={images.chatImage}></img>
                </div>
            ) : (
                <div className={cx('content')}>
                    {userState.user ? (
                        <ModelChat notify={notify} newMessage={newMessage} setNewMessage={setNewMessage} />
                    ) : (
                        <ModelLogin />
                    )}
                </div>
            )}
        </div>
    );
}

export default ChatBot;
