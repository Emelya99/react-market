import React from 'react';
import styles from './Form.module.scss';
import FormThankYou from './FormThankYou';
import FormFirst from './FormFirst';

function Form(props) {
  const [showForm, setShowForm] = React.useState(true);

  return (
    <section className={styles.form}>
      <div className="container">
        {showForm ? (
          <FormFirst
            phone={props.phone}
            callPhone={props.callPhone}
            onClick={() => setShowForm()}
          />
        ) : (
          <FormThankYou phone={props.phone} callPhone={props.callPhone} />
        )}
      </div>
    </section>
  );
}

export default Form;
