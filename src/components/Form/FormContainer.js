import { connect } from 'react-redux';
import Form from './index';
import { getPhone, getCallPhone } from '../../redux/info-selectors';

const mapStateToProps = (state) => {
  return {
    phone: getPhone(state),
    callPhone: getCallPhone(state),
  };
};

const FormContainer = connect(mapStateToProps, {})(Form);

export default FormContainer;
