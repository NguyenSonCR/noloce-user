import classNames from 'classnames/bind';
import styles from './ModelLogin.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiUser } from 'react-icons/bi';
import Button from '~/components/Button';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import config from '~/config';
import { setFormShow } from '~/slices/authSlice';

const cx = classNames.bind(styles);

function ModelLogin() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.auth);
    const [formValue, setFormValue] = useState({
        username: '',
        email: '',
        phonenumber: '',
    });

    const [validate, setValidate] = useState({
        username: '',
        email: '',
        phonenumber: '',
    });

    const onFocus = (event) => {
        setValidate({
            ...validate,
            [event.target.name]: '',
        });
    };

    const onBlur = (event) => {
        switch (event.target.name) {
            case 'username':
                if (formValue.username.length === 0) {
                    setValidate({
                        ...validate,
                        username: 'Bạn chưa nhập họ tên',
                    });
                }
                break;

            case 'email':
                if (formValue.email.length === 0) {
                    setValidate({
                        ...validate,
                        email: 'Bạn chưa nhập email',
                    });
                } else if (
                    !formValue.email
                        .toLowerCase()
                        .match(
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        )
                ) {
                    setValidate({
                        ...validate,
                        email: 'Email không đúng định dạng',
                    });
                }
                break;

            case 'phonenumber':
                if (formValue.phonenumber.length === 0) {
                    setValidate({
                        ...validate,
                        phonenumber: 'Bạn chưa nhập số điện thoại',
                    });
                } else if (!formValue.phonenumber.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
                    setValidate({
                        ...validate,
                        phonenumber: 'Số điện thoại không đúng',
                    });
                }
                break;

            default:
                break;
        }
    };

    const onChangeFormValue = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };
    let body = null;
    if (userState?.formShow === 'model') {
        body = (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('header-icon')} onClick={() => dispatch(setFormShow('icon'))}>
                        <BsChevronDown />
                    </div>
                </div>
                <div className={cx('secsion')}>
                    <p className={cx('secsion-text')}>Vui lòng nhập thông tin trước khi chat</p>
                    <Button className={cx('button')} to={config.routes.login} primary>
                        Đã có tài khoản
                    </Button>
                    <Button className={cx('button')} primary onClick={() => dispatch(setFormShow('register'))}>
                        Chưa có tài khoản
                    </Button>
                </div>
                <div className={cx('social')}>
                    <p>Hoặc quý khách có thể chat qua một trong các kênh sau đây</p>
                    <AiFillFacebook className={cx('social-icon')} />
                </div>
            </div>
        );
    } else if (userState?.formShow === 'register') {
        body = (
            <div className={cx('wrapper')}>
                <div className={cx('header-login')}>
                    <div className={cx('header-icon')} onClick={() => dispatch(setFormShow('model'))}>
                        <BsChevronLeft />
                    </div>
                    <div className={cx('header-icon')} onClick={() => dispatch(setFormShow('icon'))}>
                        <BsChevronDown />
                    </div>
                </div>
                <div className={cx('form')}>
                    <div className={cx('form-group')}>
                        <div className={cx('form-input-group')}>
                            <input
                                name="username"
                                className={cx('form-input')}
                                autoComplete="off"
                                onFocus={onFocus}
                                onBlur={onBlur}
                                value={formValue.username}
                                onChange={onChangeFormValue}
                                placeholder="Họ và tên"
                            ></input>
                            <BiUser className={cx('form-icon')} />
                        </div>

                        <span className={cx('form-validate')}>{validate.username}</span>
                    </div>
                    <div className={cx('form-group')}>
                        <div className={cx('form-input-group')}>
                            <input
                                name="email"
                                autoComplete="off"
                                className={cx('form-input')}
                                value={formValue.email}
                                onChange={onChangeFormValue}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                placeholder="Email"
                            ></input>
                            <AiOutlineMail className={cx('form-icon')} />
                        </div>
                        <span className={cx('form-validate')}>{validate.email}</span>
                    </div>
                    <div className={cx('form-group')}>
                        <div className={cx('form-input-group')}>
                            <input
                                name="phonenumber"
                                autoComplete="off"
                                className={cx('form-input')}
                                value={formValue.phonenumber}
                                onChange={onChangeFormValue}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                placeholder="Số điện thoại"
                            ></input>
                            <AiOutlinePhone className={cx('form-icon')} />
                        </div>
                        <span className={cx('form-validate')}>{validate.phonenumber}</span>
                    </div>
                    <div className={cx('action')}>
                        <Button primary>Bắt đầu chat</Button>
                    </div>
                </div>
            </div>
        );
    }

    return body;
}
export default ModelLogin;
