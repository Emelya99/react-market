export const getInstagramItemsSelector = (state) => {
    return state.sectionInstagram.instagramItems
}

export const getPreviewPhoto = (state) => {
    return state.sectionInstagram.previewPhoto
}

export const getCurrentPhoto = (state) => {
    return state.sectionInstagram.currentPhoto
}

export const getIsButtonActive = (state) => {
    return state.sectionInstagram.isButtonActive
}

export const getIsLoadMoreDisabled = (state) => {
    return state.sectionInstagram.isLoadMoreDisabled
}