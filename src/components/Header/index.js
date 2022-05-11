import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './../Logo';
import HeaderInfo from './HeaderInfo';
import HeaderClose from './HeaderClose';
import styles from './Header.module.scss';


function Header(props) {
    const [color, setColor] = React.useState("#FFF");

    function changeBgHeader () {
        setColor("#F5F5F5");
    }

    function defaultBgHeader () {
        setColor("#FFF");
    }

    return (
        <header className={styles.header} style={{ background: color }}>
            <div className='container'>
                <div className='d-flex justify-between'>
                    <Logo />
                    <Routes>
                        <Route path="/" element={<HeaderInfo changeColor={changeBgHeader} />} />
                        <Route path="/form" element={<HeaderClose changeColor={defaultBgHeader} />} />
                    </Routes>
                </div>
            </div>
        </header>
    );
}

export default Header;