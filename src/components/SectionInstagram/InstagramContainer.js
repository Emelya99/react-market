import Instagram from './index';
import { getInstagramItems, loadMoreInstagram, deleteInstagramItems } from './../../redux/instagram-reducer';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        instagramItems: state.sectionInstagram.instagramItems,
        previewPhoto: state.sectionInstagram.previewPhoto,
        currentPhoto: state.sectionInstagram.currentPhoto,
        isButtonActive: state.sectionInstagram.isButtonActive,
        isLoadMoreDisabled: state.sectionInstagram.isLoadMoreDisabled
    }
}

const InstagramContainer = connect(mapStateToProps, {getInstagramItems, loadMoreInstagram, deleteInstagramItems }) (Instagram);


export default InstagramContainer;