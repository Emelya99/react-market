import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header.module.scss';
import PhoneIcon from '../../PhoneIcon';

function HeaderInfo(props) {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className="d-flex align-center">
            <a className={styles.phone} href={props.callPhone}><span>{props.phone}</span><PhoneIcon /></a>
            <div className={`${styles.formWrapper} ${scroll > 75 && styles.scrolled}`}>
                <Link className={styles.form} to="/form">заполнить анкету</Link>
            </div>
        </div>
    )
}

export default HeaderInfo;