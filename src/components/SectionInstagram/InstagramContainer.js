import Instagram from './index';
import { addInstagramPhoto, deleteInstagramPhoto, setInstagramItems, getCurrentPhoto, isButtonActiveState } from './../../redux/instagram-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        instagramItems: state.sectionInstagram.instagramItems,
        loadMore: state.sectionInstagram.loadMore,
        previewPhoto: state.sectionInstagram.previewPhoto,
        currentPhoto: state.sectionInstagram.currentPhoto,
        isButtonActive: state.sectionInstagram.isButtonActive
    }
}

const InstagramContainer = connect(mapStateToProps, {addInstagramPhoto,deleteInstagramPhoto,setInstagramItems,getCurrentPhoto,isButtonActiveState}) (Instagram);


export default InstagramContainer;