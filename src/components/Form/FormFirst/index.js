import React from 'react';
import ButtonPhone from '../../ButtonPhone';
import styles from '../Form.module.scss';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import Select, { components } from 'react-select';
import InputMask from 'react-input-mask';
import { useDropzone } from 'react-dropzone';
import checkedImage from './checked.svg';
import ReCAPTCHA from 'react-google-recaptcha';
import caretImage from './caret-form.svg';
import Title from '../../Title';

import UploadSvg from '../../UploadSvg';

const API_KEY = process.env.REACT_APP_CAPTCHA_KEY;
console.log(API_KEY);

const DropdownIndicator = (props) => {
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
    { value: 'receiver', label: 'приёмщик' },
  ];

  const validationSchema = Yup.object().shape({
    job: Yup.string().required('выберите вакансию'),
    fullName: Yup.string().required('заполните поле'),
    dateOfBirth: Yup.date().max(new Date(), 'этого не может быть').required('выберите дату'),
    phone: Yup.string()
      .test('len', 'заполните поле', (val = '') => {
        const val_length_without_dashes = val.replace(/-|_/g, '').length;
        return val_length_without_dashes === 21;
      })
      .required('заполните поле'),
    email: Yup.string().email('поле заполнено не корректно'),
    gender: Yup.string(),
    resume: Yup.string(),
    captcha: Yup.string().required('пройдите проверку'),
    accepted: Yup.boolean().oneOf([true], 'это поле обязательное для заполнения'),
  });

  return (
    <div>
      <h2 className="title-big">Работа твоей мечты</h2>
      <div className="d-flex justify-between flex-wrap">
        <Formik
          initialValues={{
            job: '',
            fullName: '',
            dateOfBirth: '',
            phone: '',
            gender: '',
            email: '',
            resume: '',
            resumeFile: [],
            captcha: '',
            accepted: true,
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(JSON.stringify(values, null, 2));
            props.onClick(false);
          }}
          validationSchema={validationSchema}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isValid,
            dirty,
          }) => (
            <div className={styles.formContent}>
              <Form>
                <div className={styles.formItem}>
                  <p className={styles.formTitle}>
                    Вакансия *
                    {!errors.job && values.job.length > 1 && (
                      <img src={checkedImage} className={styles.checked} alt="checked" />
                    )}
                  </p>
                  <Select
                    className={touched.job && errors.job && 'error'}
                    id="job"
                    options={options}
                    placeholder="выберите работу мечты"
                    classNamePrefix={'custom-select'}
                    isSearchable={false}
                    components={{ DropdownIndicator }}
                    onChange={(selectedOption) => {
                      handleChange('job')(selectedOption.value);
                    }}
                  />
                  {touched.job && errors.job && <p className={styles.formError}>{errors.job}</p>}
                </div>
                <div className={styles.formItem}>
                  <p className={styles.formTitle}>
                    ФИО *
                    {touched.fullName && !errors.fullName && (
                      <img src={checkedImage} className={styles.checked} alt="checked" />
                    )}
                  </p>
                  <Field
                    className={touched.fullName && errors.fullName && 'error'}
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    autoComplete="off"
                  />
                  {touched.fullName && errors.fullName && (
                    <p className={styles.formError}>{errors.fullName}</p>
                  )}
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formColumn}>
                    <div className={styles.formItem}>
                      <p className={styles.formTitle}>
                        Дата рождения *
                        {!errors.dateOfBirth && values.dateOfBirth.length >= 10 && (
                          <img src={checkedImage} className={styles.checked} alt="checked" />
                        )}
                      </p>
                      <Field
                        className={touched.dateOfBirth && errors.dateOfBirth && 'error'}
                        type="date"
                        name="dateOfBirth"
                        value={values.dateOfBirth}
                        placeholder="28.06.2002"
                        pattern="\d{4}-\d{2}-\d{2}"
                      />
                      {touched.dateOfBirth && errors.dateOfBirth && (
                        <p className={styles.formError}>{errors.dateOfBirth}</p>
                      )}
                    </div>

                    <div className={styles.formItem}>
                      <p className={styles.formTitle}>
                        Контактый телефон *
                        {touched.phone && !errors.phone && (
                          <img src={checkedImage} className={styles.checked} alt="checked" />
                        )}
                      </p>
                      <InputMask
                        className={touched.phone && errors.phone && 'error'}
                        name="phone"
                        type="tel"
                        mask="+38 (999) 999 - 99 - 99"
                        placeholder="+38 ("
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      {touched.phone && errors.phone && (
                        <p className={styles.formError}>{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div className={styles.formColumn}>
                    <div className={`${styles.formItem} form-radio`}>
                      <p className={styles.formTitle}>
                        Пол
                        {!errors.gender && values.gender.length > 1 && (
                          <img src={checkedImage} className={styles.checked} alt="checked" />
                        )}
                      </p>
                      <label>
                        <Field type="radio" name="gender" value="male" />
                        <span>мужской</span>
                      </label>
                      <label>
                        <Field type="radio" name="gender" value="female" />
                        <span>женский</span>
                      </label>
                      {touched.gender && errors.gender && (
                        <p className={styles.formError}>{errors.gender}</p>
                      )}
                    </div>
                    <div className={styles.formItem}>
                      <p className={styles.formTitle}>
                        Электронная почта
                        {touched.email && !errors.email && values.email.length > 1 && (
                          <img src={checkedImage} className={styles.checked} alt="checked" />
                        )}
                      </p>
                      <Field
                        className={touched.email && errors.email && 'error'}
                        type="email"
                        name="email"
                        value={values.email}
                        autoComplete="off"
                      />
                      {touched.email && errors.email && (
                        <p className={styles.formError}>{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.formItem}>
                  <p className={styles.formTitle}>
                    Резюме
                    {!errors.resume && values.resume.length >= 1 && (
                      <img src={checkedImage} className={styles.checked} alt="checked" />
                    )}
                  </p>
                  <Field
                    className={touched.resume && errors.resume && 'error'}
                    as="textarea"
                    name="resume"
                    value={values.resume}
                  />
                  <UploadComponent setFieldValue={setFieldValue} />
                  <ul className={styles.uploadList}>
                    {values.resumeFile &&
                      values.resumeFile.map((file, i) => (
                        <li key={file.path}>
                          {file.path} - {file.size / 1000} МБ
                        </li>
                      ))}
                  </ul>
                </div>

                <div className={styles.formRow} style={{ marginBottom: '-6px' }}>
                  <div className={`${styles.formColumn} form-captcha`}>
                    <div className={styles.formItem}>
                      <p className={styles.formTitle}>Капча *</p>
                      <ReCAPTCHA
                        sitekey={API_KEY}
                        onChange={(value) => {
                          setFieldValue('captcha', value);
                        }}
                      />
                      {touched.captcha && errors.captcha && (
                        <p className={styles.formError}>{errors.captcha}</p>
                      )}
                    </div>
                  </div>
                  <div className={styles.formColumn}>
                    <div className={styles.formItem}>
                      <p className={styles.requiredNotice}>* поля для обязательного заполнения</p>
                    </div>
                  </div>
                </div>

                <div className={`${styles.formItem} form-checkbox`}>
                  <label>
                    <Field type="checkbox" name="accepted" />
                    <span>
                      я подтверждаю согласие на обработку персональных данных и принимаю условия
                      рассмотрения обращений *
                    </span>
                  </label>
                  {errors.accepted && <p className={styles.formError}>{errors.accepted}</p>}
                </div>
                <button className={styles.submitBtn} onClick={handleSubmit} type="submit">
                  отправить
                </button>
              </Form>
            </div>
          )}
        </Formik>

        <div className={styles.purpose}>
          <Title title="Наша суперцель" />
          <p>— стать любимым магазином для каждой российской семьи.</p>
          <p>Сотни тысяч наших сотрудников ежедневно работают над её достижением.</p>
          <p>
            Мы уверены, что в ближайшие годы достигнем этого и будет здорово,если вместе с тобой.
          </p>
          <ButtonPhone phone={props.phone} callPhone={props.callPhone} />
        </div>
      </div>
    </div>
  );
}

const UploadComponent = (props) => {
  const { setFieldValue } = props;
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFieldValue('resumeFile', acceptedFiles);
    },
  });
  return (
    <div>
      {}
      <div className={`${styles.inputDrop} input`}>
        <UploadSvg />
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} type="text" name="resumeFile" />
          <p>выберете или перетащите файл</p>
        </div>
      </div>
    </div>
  );
};

export default FormFirst;
