import React from 'react';
import { Link } from 'react-router-dom';
import Close from './../../Close';

function HeaderClose(props) {

    let changeHeaderBackground = props.changeHeaderBackground;

    React.useEffect(() => {
        changeHeaderBackground(false);
        return () => {
            changeHeaderBackground(true);
        }
    }, [changeHeaderBackground])

    return (
        
        <Link to="/" >
            <Close />
        </Link>
    )
}

export default HeaderClose;