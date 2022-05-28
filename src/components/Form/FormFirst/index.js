import ButtonPhone from '../../ButtonPhone';
import styles from '../Form.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import checkedImage from './checked.svg';
import Title from '../../Title';

function FormFirst(props) {

    const formik = useFormik({
        initialValues: {
            job: '',
            fullName: '',
            dateOfBirth: '',
            phone: '',
            gender: '',
            email: '',
            resume: '',
            resumeFile: '',
            captcha: '',
            accepted: true
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('заполнете поле'),
            dateOfBirth: Yup.string().required('заполнете поле'),
            email: Yup.string().email('некорректная почта'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            props.onClick(false);
        },
    });

    return (
        <div>
            <h2 className='title-big'>Работа твоей мечты</h2>
            <div className='d-flex justify-between flex-wrap'>
                <div className={styles.formContent}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.formItem}>
                            <label htmlFor="fullName">
                                ФИО *
                                {formik.touched.fullName && !formik.errors.fullName
                                    && <img src={checkedImage} className={styles.checked} alt="checked" />}
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                className={formik.touched.fullName && formik.errors.fullName && 'error'}
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                            />
                            {formik.touched.fullName && formik.errors.fullName
                                && <p className={styles.formError}>{formik.errors.fullName}</p>
                            }
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formColumn}>
                                <div className={styles.formItem}>
                                    <label htmlFor="dateOfBirth">
                                        Дата рождения *
                                        {formik.touched.dateOfBirth && !formik.errors.dateOfBirth
                                            && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                    </label>
                                    <input
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        className={formik.touched.dateOfBirth && formik.errors.dateOfBirth && 'error'}
                                        type="text"
                                        placeholder="28.07.2002"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.dateOfBirth}
                                    />
                                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth
                                        && <p className={styles.formError}>{formik.errors.dateOfBirth}</p>
                                    }
                                </div>
                            </div>
                            <div className={styles.formColumn}>
                                <div className={styles.formItem}>
                                    <div className={styles.formItem}>
                                        <label htmlFor="gender">
                                            Пол
                                            {formik.touched.gender && !formik.errors.gender
                                                && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                        </label>
                                        <input
                                            id="gender"
                                            name="gender"
                                            className={formik.touched.gender && formik.errors.gender && 'error'}
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.gender}
                                        />
                                    </div>
                                    <div className={styles.formItem}>
                                        <label htmlFor="email">
                                            Электронная почта
                                            {formik.touched.email && !formik.errors.email
                                                && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            className={formik.touched.email && formik.errors.email && 'error'}
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        />
                                        {formik.touched.email && formik.errors.email
                                            && <p className={styles.formError}>{formik.errors.email}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button type="submit" className={styles.submitBtn}>отправить</button>
                    </form>
                </div>
                <div className={styles.purpose}>
                    <Title
                        title="Наша суперцель"
                    />
                    <p>— стать любимым магазином для каждой российской семьи.</p>
                    <p>Сотни тысяч наших сотрудников ежедневно работают над её достижением.</p>
                    <p>Мы уверены, что в ближайшие годы достигнем этого и будет здорово,если вместе с тобой.</p>
                    <ButtonPhone phone={props.phone} callPhone={props.callPhone} />
                </div>
            </div>
        </div>
    )

}

export default FormFirst;