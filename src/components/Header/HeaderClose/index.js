import React from 'react';
import { Link } from 'react-router-dom';
import Close from './../../Close';

function HeaderClose(props) {

    React.useEffect(() => {
        props.changeHeaderBackground(false);
        return () => {
            props.changeHeaderBackground(true);
        }
    }, [])

    return (
        
        <Link to="/" >
            <Close />
        </Link>
    )
}

export default HeaderClose;