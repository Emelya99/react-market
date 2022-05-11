import { Link } from 'react-router-dom';
import Close from './../../Close';

function HeaderClose(props) {
    return (
        
        <Link to="/" >
            <Close />
        </Link>
    )
}

export default HeaderClose;