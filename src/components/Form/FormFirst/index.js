import ButtonPhone from '../../ButtonPhone';
import styles from '../Form.module.scss';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import Select, { components } from "react-select";
import checkedImage from './checked.svg';
import caretImage from './caret-form.svg';
import Title from '../../Title';

const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
            <img src={caretImage} alt="caret-form" />
      </components.DropdownIndicator>
    );
  };

function FormFirst(props) {

    const options = [
        { value: 'merchandiser', label: 'товаровед' },
        { value: 'driver', label: 'водитель' },
        { value: 'baker', label: 'пекарь' },
        { value: 'cashier', label: 'кассир' },
        { value: 'salesman', label: 'продавец' },
        { value: 'cook', label: 'повар' },
        { value: 'receiver', label: 'приёмщик' }
    ]

    const validationSchema = Yup.object().shape({
        job: Yup.array()
        .min(1, "выбирете вакансию")
        .of(
          Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required()
          })
        ),
        fullName: Yup.string().required('заполнете поле'),
        phone: Yup.number().required('заполнете поле'),
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
                    {({ values, errors, touched, isValid, handleChange, handleBlur, handleSubmit, dirty }) => (

                        <div className={styles.formContent}>
                            <Form>
                                <div className={styles.formItem}>
                                    <p className={styles.formTitle}>
                                        Вакансия *
                                        { !errors.job
                                                && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                    </p>
                                    <Select
                                        id="job"
                                        options={options}
                                        placeholder="выберите работу мечты"
                                        classNamePrefix={'custom-select'}
                                        isSearchable={false}
                                        components={{ DropdownIndicator }}
                                        onChange={handleChange}
                                        value={values.job}
                                        onBlur={handleBlur}
                                    />
                                    {touched.job && errors.job
                                        && <p className={styles.formError}>{errors.job}</p>
                                    }
                                </div>
                                <div className={styles.formItem}>
                                    <p className={styles.formTitle}>
                                        ФИО *
                                        {touched.fullName && !errors.fullName
                                            && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                    </p>
                                    <Field
                                        className={touched.fullName && errors.fullName && 'error'}
                                        type="text"
                                        name="fullName"
                                        value={values.fullName}
                                        autoComplete="off"
                                    />
                                    {touched.fullName && errors.fullName
                                        && <p className={styles.formError}>{errors.fullName}</p>
                                    }
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formColumn}>

                                        <div className={styles.formItem}>
                                            <p className={styles.formTitle}>
                                                Контактый телефон *
                                                {!errors.phone && values.phone.length >= 10
                                                    && <img src={checkedImage} className={styles.checked} alt="checked" />}
                                            </p>
                                            <Field
                                                className={touched.phone && errors.phone && 'error'}
                                                name="phone"
                                                type="tel"
                                                value={values.phone}
                                                autoComplete="off"
                                            />
                                            {touched.phone && errors.phone
                                                && <p className={styles.formError}>{errors.phone}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className={styles.formColumn}>
                                        <div className={`${styles.formItem} form-radio`}>
                                            <p className={styles.formTitle}>
                                                Пол *
                                                {!errors.gender && values.gender.length > 1
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
                                                autoComplete="off"
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
                                        {!errors.resume && values.resume.length >= 1
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
                                    {errors.accepted
                                        && <p className={styles.formError}>{errors.accepted}</p>
                                    }
                                </div>
                                <button
                                    disabled={!isValid}
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