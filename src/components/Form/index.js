import ButtonPhone from '../ButtonPhone';
import styles from './Form.module.scss';

function Form (props) {
    return (
        <section className={styles.form}>
            <div className='container'>
                {/* <div>
                    <h2 className='title-big'>Работа твоей мечты</h2>
                </div> */}
                <div>
                    <h2 className='title-big'>Ждем тебя!</h2>
                    <div className='d-flex justify-between flex-wrap'>
                        <div className={styles.content}>
                            <p>В 2020 году самыми востребованными умениями и качествами на рынке труда станут:</p>
                            <p className={styles.text}>Умение ставить цели, планировать свое время, инициативность, настойчивость, высокая мотивация, умение эффективно общаться, любознательность. </p>
                            <p>А профессиональным навыкам можно научить любого человека.</p>
                        </div>
                        <div className={styles.question}>
                            <h3 className='title'>Остались вопросы?</h3>
                            <ButtonPhone />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;