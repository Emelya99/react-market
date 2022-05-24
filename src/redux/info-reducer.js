const IS_BACKGROUND_HEADER = "IS_BACKGROUND_HEADER";

let initialState = {
    phone: '+7 (926) 433-14-16',
    callPhone: 'tel:+79264331416',
    companyName: 'гросс маркет',
    isBackgroundHeader: true
}

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_BACKGROUND_HEADER:
            return {
                ...state,
                isBackgroundHeader: action.isBackgroundHeader
            }
        default:
            return state;
    }
}


export const changeHeaderBackground = (isBackgroundHeader) => ({ type: IS_BACKGROUND_HEADER , isBackgroundHeader});

export default infoReducer;