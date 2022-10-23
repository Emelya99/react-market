import ButtonPhone from '../../ButtonPhone';
import styles from '../Form.module.scss';

function FormThankYou(props) {
  return (
    <div>
      <h2 className="title-big">Ждем тебя!</h2>
      <div className="d-flex justify-between flex-wrap">
        <div className={styles.content}>
          <p>В 2020 году самыми востребованными умениями и качествами на рынке труда станут:</p>
          <p className={styles.text}>
            Умение ставить цели, планировать свое время, инициативность, настойчивость, высокая
            мотивация, умение эффективно общаться, любознательность.{' '}
          </p>
          <p>А профессиональным навыкам можно научить любого человека.</p>
        </div>
        <div className={styles.question}>
          <h3 className="title">Остались вопросы?</h3>
          <ButtonPhone phone={props.phone} callPhone={props.callPhone} />
        </div>
      </div>
    </div>
  );
}

export default FormThankYou;
