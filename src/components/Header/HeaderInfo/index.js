import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header.module.scss';

function HeaderInfo(props) {

    return (
        <div className="d-flex align-center">
            <a className={styles.phone} href={props.callPhone}>{props.phone}</a>
            <Link className={styles.form} to="/form">заполнить анкету</Link>
        </div>
    )
}

export default HeaderInfo;