import { Link } from 'react-router-dom';
import styles from './HeaderInfo.module.scss';

function HeaderInfo(props) {
    return (
        <div className="d-flex align-center">
            <a className={styles.phone} href="#"></a>
            <Link className={styles.form} to="/form" onClick={props.changeColor}>заполнить анкету</Link>
        </div>
    )
}

export default HeaderInfo;