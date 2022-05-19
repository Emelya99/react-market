import { connect } from "react-redux";
import Footer from "./index";

const mapStateToProps = (state) => {
    return {
        companyName: state.info.companyName
    }
}

const FooterContainer = connect(mapStateToProps, {}) (Footer);

export default FooterContainer;