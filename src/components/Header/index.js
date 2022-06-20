import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './../Logo';
import HeaderInfo from './HeaderInfo';
import HeaderClose from './HeaderClose';
import styles from './Header.module.scss';


function Header(props) {

    return (
        <header className={styles.header}
            style={{ backgroundColor: props.isBackgroundHeader ? '#FFF' : '#F5F5F5' }}
        >
            <div className='container'>
                <div className={styles.wrapper}>
                    <Logo companyName={props.companyName} />
                    <Routes>
                        <Route path="/" element={<HeaderInfo phone={props.phone} callPhone={props.callPhone} changeHeaderBackground={props.changeHeaderBackground} />} />
                        <Route path="/form" element={<HeaderClose changeHeaderBackground={props.changeHeaderBackground}  />} />
                    </Routes>
                </div>
            </div>
        </header>
    );
}

export default Header;