import styles from './ButtonPhone.module.scss';

function ButtonPhone(props) {
  return (
    <a className={styles.phone} href={props.callPhone}>
      {props.phone}
    </a>
  );
}

export default ButtonPhone;
