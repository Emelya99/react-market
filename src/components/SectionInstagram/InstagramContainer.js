import Instagram from './index';
import { getInstagramItems, loadMoreInstagram, deleteInstagramItems } from './../../redux/instagram-reducer';
import { getInstagramItemsSelector, getPreviewPhoto, getCurrentPhoto, getIsButtonActive, getIsLoadMoreDisabled } from '../../redux/instagram-selectors'
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        instagramItems: getInstagramItemsSelector(state),
        previewPhoto: getPreviewPhoto(state),
        currentPhoto: getCurrentPhoto(state),
        isButtonActive: getIsButtonActive(state),
        isLoadMoreDisabled: getIsLoadMoreDisabled(state)
    }
}

const InstagramContainer = connect(mapStateToProps, {getInstagramItems, loadMoreInstagram, deleteInstagramItems }) (Instagram);


export default InstagramContainer;