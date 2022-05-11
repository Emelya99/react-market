const ADD_INSTAGRAM_PHOTO = 'ADD-INSTAGRAM-PHOTO';
const DELETE_INSTAGRAM_PHOTO = 'DELETE-INSTAGRAM-PHOTO';
const SET_INSTAGRAM_ITEMS = 'SET-INSTAGRAM-ITEMS';
const GET_CURRENT_PHOTO = 'GET-CURRENT-PHOTO';
const IS_BUTTON_ACTIVE_STATUS = 'IS-BUTTON-ACTIVE-STATUS';

let initialState = {
    instagramItems: [ ],
    previewPhoto: 5,
    loadMore: 8,
    currentPhoto: 13,
    isButtonActive: false
};

const instagramReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INSTAGRAM_PHOTO: 
            return {
                ...state,
                instagramItems: [
                    ...state.instagramItems,
                    { imgUrl: './img/work/work-3.png', alt: 'image-5' }
                ]
            };
        case DELETE_INSTAGRAM_PHOTO:
            return {
                ...state,
                instagramItems: [
                    ...state.instagramItems.filter((_, i) => i !== state.instagramItems.length - 1)
                ]
            };
        case SET_INSTAGRAM_ITEMS:
            return { ...state, instagramItems: [ ...action.instagramItems ] }
        case GET_CURRENT_PHOTO: 
            return {
                ...state,
                currentPhoto: action.currentPhoto + state.loadMore
            }
        case IS_BUTTON_ACTIVE_STATUS:
            return {
                ...state,
                isButtonActive: action.isButtonActive
            }
        default:
            return state;
    }
}

export const addInstagramPhoto = () => ({ type: ADD_INSTAGRAM_PHOTO });
export const deleteInstagramPhoto = () => ({ type: DELETE_INSTAGRAM_PHOTO });
export const setInstagramItems = (instagramItems) => ({ type: SET_INSTAGRAM_ITEMS, instagramItems });
export const getCurrentPhoto = (currentPhoto) => ({ type: GET_CURRENT_PHOTO, currentPhoto });
export const isButtonActiveState = (isButtonActive) => ({ type: IS_BUTTON_ACTIVE_STATUS, isButtonActive });

export default instagramReducer;