import { connect } from "react-redux";
import Form from "./index";

const mapStateToProps = (state) => {
    return {
        phone: state.info.phone,
        callPhone: state.info.callPhone
    }
}

const FormContainer = connect(mapStateToProps, {}) (Form);

export default FormContainer;