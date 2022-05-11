import { connect } from "react-redux";
import { changeHeaderBackground } from '../../redux/info-reducer'
import Header from "./index";

const mapStateToProps = (state) => {
    return {
        phone: state.info.phone,
        callPhone: state.info.callPhone,
        companyName: state.info.companyName,
        headerBackground: state.info.headerBackground
    }
}

const HeaderContainer = connect(mapStateToProps, {changeHeaderBackground}) (Header);

export default HeaderContainer;