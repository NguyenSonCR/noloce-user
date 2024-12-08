import classNames from 'classnames/bind';
import styles from './ModelChat.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSend } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { addMessage, setFormShow } from '~/slices/authSlice';
import ContentItemAdmin from '../ContentItemAdmin';
import ContentItemUser from '../ContentItemUser';
import images from '~/assets/img';
import { socket } from '~/socket';
const cx = classNames.bind(styles);

function ModelChat({ newMessage, setNewMessage, notify }) {
    const userState = useSelector((state) => state.auth);
    const [chatMess, setChatMess] = useState('');
    const [message, setMessage] = useState([]);
    const [lastMessage, setLastMessage] = useState(null);
    const [userTyping, setUserTyping] = useState(null);
    const dispatch = useDispatch();
    const scroll = useRef();

    useEffect(() => {
        if (userState?.user?.message) {
            setMessage(userState.user.message);
            setLastMessage(userState?.user?.message?.[userState.user.message.length - 1]);
        }
        // eslint-disable-next-line
    }, [userState.user]);

    const [focusInput, setFocusInput] = useState(false);
    const inputRef = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();
        if (chatMess.trim().length === 0) return;
        dispatch(
            addMessage({
                username: userState.user.username,
                content: chatMess,
                seen: false,
                createdAt: new Date().toISOString(),
            }),
        );

        try {
            await socket.emit('sendMessage', {
                senderUsername: userState.user.username,
                recieverUsername: 'admin',
                username: userState.user.username,
                message: chatMess,
            });
            setChatMess('');
            inputRef.current.innerText = '';
        } catch (error) {
            console.log(error);
        }
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            onSubmit(event);
        }
    };

    const [notifyNewMessage, setNotifyNewMessage] = useState(null);

    useEffect(() => {
        scroll?.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }, [lastMessage]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div
                    className={cx('header-icon')}
                    onClick={() => {
                        setNewMessage(false);
                        dispatch(setFormShow('icon'));
                    }}
                >
                    <BsChevronDown />
                </div>
            </div>
            <div className={cx('chat-container')}>
                <div className={cx('chat-contain')}>
                    {message.length > 0 &&
                        message.map((mess, index) => {
                            // crurrent date
                            const messageDate = new Date(mess.createdAt).getDate();
                            const messageMonth = new Date(mess.createdAt).getMonth() + 1;
                            const messageYear = new Date(mess.createdAt).getFullYear();
                            let date = `${messageDate} tháng ${messageMonth}, ${messageYear}`;
                            let valueDate = date;
                            // prevous date
                            const messagePreDate = index > 0 ? new Date(message[index - 1].createdAt).getDate() : null;
                            const messagePreMonth =
                                index > 0 ? new Date(message[index - 1].createdAt).getMonth() + 1 : null;
                            const messagePreYear =
                                index > 0 ? new Date(message[index - 1].createdAt).getFullYear() : null;

                            let preDate =
                                index !== 0 ? `${messagePreDate} tháng ${messagePreMonth}, ${messagePreYear}` : date;

                            if (index === 0) {
                                valueDate = date;
                            } else if (index !== 0 && date !== preDate) {
                                valueDate = date;
                            } else {
                                valueDate = null;
                            }

                            if (mess?.username === userState.user.username) {
                                return (
                                    <div className={cx('message')} key={index}>
                                        {valueDate && <div className={cx('mess-date')}>{valueDate}</div>}
                                        <ContentItemAdmin data={{ message, index, mess, date, preDate }} />
                                    </div>
                                );
                            } else {
                                return (
                                    <div className={cx('message')} key={index}>
                                        {valueDate && <div className={cx('mess-date')}>{valueDate}</div>}
                                        <ContentItemUser data={{ message, index, mess, date, preDate }} />
                                    </div>
                                );
                            }
                        })}

                    {lastMessage?.username === userState.user.username && lastMessage.seen && (
                        <div className={cx('notify')}>
                            <img src={images.logo} alt="avatar" className={cx('notify-img')}></img>
                        </div>
                    )}
                    {userTyping && <div className={cx('loader')}></div>}

                    <div ref={scroll}></div>
                </div>
                <div className={cx('input-group')}>
                    {notifyNewMessage && <div className={cx('notify-new-message')}>{notify} tin nhắn mới</div>}
                    <div
                        ref={inputRef}
                        spellCheck={false}
                        onFocus={() => {
                            setFocusInput(true);
                        }}
                        onBlur={() => {
                            setFocusInput(false);
                        }}
                        onKeyDown={(event) => handleEnter(event)}
                        contentEditable={true}
                        className={cx('chat-input')}
                        onInput={(event) => {
                            setChatMess(event.target.innerText);
                        }}
                    ></div>
                    {!focusInput && chatMess.length === 0 && <div className={cx('chat-input-lable')}>Aa</div>}

                    <div className={cx('input-icon')} onClick={onSubmit}>
                        {chatMess?.trim().length === 0 ? (
                            <AiOutlineSend className={cx('input-icon-send')} />
                        ) : (
                            <AiOutlineSend />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModelChat;
