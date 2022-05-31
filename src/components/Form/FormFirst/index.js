import ButtonPhone from '../../ButtonPhone';
import styles from '../Form.module.scss';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import checkedImage from './checked.svg';
import Title from '../../Title';

function FormFirst(props) {

    const validationSchema = Yup.object().shape({
        // job: Yup.string().required('выбирете вакансию'),
        fullName: Yup.string().required('заполнете поле'),
        email: Yup.string().email('поле заполнено не корректно'),
        gender: Yup.string().required("выберите пол"),
        resume: Yup.string(),
        accepted: Yup.boolean().oneOf([true], 'это поле обязательное для заполнения')
    })

    return (
        <div>
            <h2 className='title-big'>Работа твоей мечты</h2>
            <div className='d-flex justify-between flex-wrap'>
                <Formik
                    initialValues={{
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
                    }}
                    validateOnBlur
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values, null, 2));
                        props.onClick(false);
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, isValid, handleSubmit, dirty }) => (

                        <div className={styles.formContent}>
                            <Form>
                                {/* <div className={styles.formItem}>
                                <label htmlFor="job">
                                    Вакансия *
                                    { touched.job && !errors.job
                                        && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                </label>
                                <Field as="select" name="job">
                                    <option value="merchandiser">товаровед</option>
                                    <option value="driver">водитель</option>
                                    <option value="baker">пекарь</option>
                                    <option value="cashier">кассир</option>
                                    <option value="salesman">продавец</option>
                                    <option value="cook">повар</option>
                                    <option value="receiver">приёмщик</option>
                                </Field>
                            </div> */}
                                <div className={styles.formItem}>
                                    <p className={styles.formTitle}>
                                        ФИО *
                                        { touched.fullName && !errors.fullName
                                            && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                    </p>
                                    <Field 
                                        className={touched.fullName && errors.fullName && 'error'}
                                        type="text"
                                        name="fullName"
                                        value={values.fullName}
                                        autocomplete="off"
                                    />
                                    {touched.fullName && errors.fullName
                                        && <p className={styles.formError}>{errors.fullName}</p>
                                    }
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formColumn}>

                                    </div>
                                    <div className={styles.formColumn}>
                                        <div className={`${styles.formItem} form-radio`}>
                                            <p className={styles.formTitle}>
                                                Пол *
                                                { !errors.gender && values.gender.length > 1
                                                    && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                            </p>
                                            <label>
                                                <Field type="radio" name="gender" value="male" />
                                                <span>мужской</span>
                                            </label>
                                            <label>
                                                <Field type="radio" name="gender" value="female" />
                                                <span>женский</span>
                                            </label>
                                            {touched.gender && errors.gender
                                                && <p className={styles.formError}>{errors.gender}</p>
                                            }
                                        </div>
                                        <div className={styles.formItem}>
                                            <p className={styles.formTitle}>
                                                Электронная почта
                                                {touched.email && !errors.email && values.email.length > 1
                                                    && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                            </p>
                                            <Field 
                                                className={touched.email && errors.email && 'error'}
                                                type="email"
                                                name="email"
                                                value={values.email}
                                                autocomplete="off"
                                            />
                                            {touched.email && errors.email
                                                && <p className={styles.formError}>{errors.email}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.formItem}>
                                    <p className={styles.formTitle}>
                                        Резюме
                                        { !errors.resume && values.resume.length >= 1
                                            && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                    </p>
                                    <Field 
                                        className={touched.resume && errors.resume && 'error'}
                                        as="textarea"
                                        name="resume"
                                        value={values.resume}
                                    />
                                    {touched.resume && errors.resume
                                        && <p className={styles.formError}>{errors.resume}</p>
                                    }
                                </div>





                                <div className={`${styles.formItem} form-checkbox`}>
                                    <label>
                                        <Field type="checkbox" name="accepted" />
                                        <span>я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения обращений *</span>
                                    </label>
                                    { errors.accepted
                                        && <p className={styles.formError}>{errors.accepted}</p>
                                    }
                                </div>
                                <button
                                    // disabled={!isValid}
                                    className={styles.submitBtn}
                                    onClick={handleSubmit}
                                    type="submit"
                                >
                                    отправить
                                </button>
                            </Form>
                        </div>
                    )}
                </Formik>


















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