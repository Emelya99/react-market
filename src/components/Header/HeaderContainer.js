import { connect } from 'react-redux';
import { changeHeaderBackground } from '../../redux/info-reducer';
import {
  getPhone,
  getCallPhone,
  getCompanyName,
  getIsBackgroundHeader,
} from '../../redux/info-selectors';
import Header from './index';

const mapStateToProps = (state) => {
  return {
    phone: getPhone(state),
    callPhone: getCallPhone(state),
    companyName: getCompanyName(state),
    isBackgroundHeader: getIsBackgroundHeader(state),
  };
};

const HeaderContainer = connect(mapStateToProps, { changeHeaderBackground })(Header);

export default HeaderContainer;
