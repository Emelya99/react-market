const IS_BACKGROUND_HEADER = 'header/IS_BACKGROUND_HEADER';

let initialState = {
  phone: '+38 (066) 433-14-16',
  callPhone: 'tel:+380664331416',
  companyName: 'гросс маркет',
  isBackgroundHeader: true,
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_BACKGROUND_HEADER:
      return {
        ...state,
        isBackgroundHeader: action.isBackgroundHeader,
      };
    default:
      return state;
  }
};

export const changeHeaderBackground = (isBackgroundHeader) => ({
  type: IS_BACKGROUND_HEADER,
  isBackgroundHeader,
});

export default infoReducer;
