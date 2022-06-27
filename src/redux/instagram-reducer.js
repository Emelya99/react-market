import { instagramAPI } from "../dal/api";

const SET_INSTAGRAM_ITEMS = 'instagram/SET-INSTAGRAM-ITEMS';
const GET_CURRENT_PHOTO = 'instagram/GET-CURRENT-PHOTO';
const RETURN_CURRENT_PHOTO = 'instagram/RETURN-CURRENT-PHOTO';
const IS_BUTTON_ACTIVE_STATUS = 'instagram/IS-BUTTON-ACTIVE-STATUS';
const IS_LOAD_MORE_DISABLED = 'instagram/IS-LOAD-MORE-DISABLED';

let initialState = {
    instagramItems: [ ],
    previewPhoto: 5,
    loadMore: 8,
    currentPhoto: 13,
    isButtonActive: false,
    isLoadMoreDisabled: false
};

const instagramReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INSTAGRAM_ITEMS:
            return { ...state, instagramItems: [ ...action.instagramItems ] }
        case GET_CURRENT_PHOTO: 
            return {
                ...state,
                currentPhoto: action.currentPhoto + state.loadMore
            }
        case RETURN_CURRENT_PHOTO:
            return {
                ...state,
                currentPhoto: 13
            }
        case IS_BUTTON_ACTIVE_STATUS:
            return {
                ...state,
                isButtonActive: action.isButtonActive
            }
        case IS_LOAD_MORE_DISABLED:
            return {
                ...state,
                isLoadMoreDisabled: action.isLoadMoreDisabled
            }
        default:
            return state;
    }
}

export const setInstagramItems = (instagramItems) => ({ type: SET_INSTAGRAM_ITEMS, instagramItems });
export const getCurrentPhoto = (currentPhoto) => ({ type: GET_CURRENT_PHOTO, currentPhoto });
export const isButtonActiveState = (isButtonActive) => ({ type: IS_BUTTON_ACTIVE_STATUS, isButtonActive });
export const isLoadMoreDisabledState = (isLoadMoreDisabled) => ({ type: IS_LOAD_MORE_DISABLED, isLoadMoreDisabled });
export const returnCurrentPhotoAction = () => ({ type: RETURN_CURRENT_PHOTO });

export const getInstagramItems = (previewPhoto) => (dispatch) => {
    dispatch(isLoadMoreDisabledState(true));
    instagramAPI.getInstagramItems(previewPhoto).then(data => {
        dispatch(setInstagramItems(data.items));
        dispatch(isLoadMoreDisabledState(false));
    })
}

export const loadMoreInstagram = (count) => (dispatch) => {
    dispatch(getCurrentPhoto(count));
    dispatch(isLoadMoreDisabledState(true));
    instagramAPI.loadMoreInstagramItems(count).then(data => {
        dispatch(setInstagramItems(data.items));
        let totalCount = data.count;
        if (count >= totalCount) {
            dispatch(isButtonActiveState(true));
        }
        dispatch(isLoadMoreDisabledState(false));
    })
}

export const deleteInstagramItems = () => (dispatch) => {
    dispatch(isButtonActiveState(false));
    dispatch(returnCurrentPhotoAction());
}


export default instagramReducer;