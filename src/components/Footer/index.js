import Logo from '../Logo';
import styles from './Footer.module.scss';

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={`${styles.wrapper} d-flex justify-between align-center mb-25`}>
                    <Logo companyName={props.companyName} />
                    <a className='title ml-30 mb-5' href='/#'>поделиться</a>
                    <ul className={`${styles.list} d-flex`}>
                        <li>
                            <a href='/#'>
                                <img width={24} height={24} alt="facebook" src="img/facebook.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href='/#'>
                                <img width={24} height={24} alt="vk" src="img/vk.svg"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.bottom} d-flex justify-between align-center`}>
                    <p>© {props.companyName} {(new Date().getFullYear())}</p>
                    <button onClick={props.onOpenPolitic}>Политика обработки персональных данных</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;