import classNames from 'classnames/bind';
import styles from './Spinner.module.scss';

const cx = classNames.bind(styles);

function Spinner() {
    return (
        <div className={cx('lds-default')}>
            <div style={{ animation: 'lds-default 1.2s linear 0s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -0.1s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -0.2s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -0.3s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -0.4s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -0.5s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -0.6s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -0.7s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -0.8s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -0.9s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -1s infinite' }}></div>
            <div style={{ animation: 'lds-default 1.2s linear -1.1s infinite' }}></div>
        </div>
    );
}

export default Spinner;
