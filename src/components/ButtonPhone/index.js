import styles from './ButtonPhone.module.scss';

function ButtonPhone() {
    return (
        <a className={styles.phone} href="tel:123">123</a>
    )
}

export default ButtonPhone;