import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './../Logo';
import HeaderInfo from './HeaderInfo';
import HeaderClose from './HeaderClose';
import styles from './Header.module.scss';


function Header(props) {
    return (
        <header className={styles.header} style={{backgroundColor: props.headerBackground}}>
            <div className='container'>
                <div className='d-flex justify-between'>
                    <Logo companyName={props.companyName} />
                    <Routes>
                        <Route path="/" element={<HeaderInfo phone={props.phone} callPhone={props.callPhone} />} />
                        <Route path="/form" element={<HeaderClose />} />
                    </Routes>
                </div>
            </div>
        </header>
    );
}

export default Header;