import { connect } from "react-redux";
import Footer from "./index";
import { getCompanyName } from "../../redux/info-selectors";

const mapStateToProps = (state) => {
    return {
        companyName: getCompanyName(state)
    }
}

const FooterContainer = connect(mapStateToProps, {}) (Footer);

export default FooterContainer;