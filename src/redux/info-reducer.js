// const SET_INFO_DAFAULT = "SET_INFO_DAFAULT";
const HEADER_BACKGROUND = "HEADER_BACKGROUND";

let initialState = {
    phone: '+7 (926) 433-14-16',
    callPhone: 'tel:+79264331416',
    companyName: 'гросс маркет',
    headerBackground: '#FFF'
}

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_INFO_DAFAULT:
        //     return {
        //         ...state
        //     }
        case HEADER_BACKGROUND:
            return {
                ...state,
                headerBackground: action.headerBackground
            }
        default:
            return state;
    }
}

// export const setInfoDefault = () => ({ type: SET_INFO_DAFAULT });
export const changeHeaderBackground = (headerBackground) => ({ type: HEADER_BACKGROUND , headerBackground});


export default infoReducer;