import instagramReducer from './instagram-reducer';

let store = {
    _state: {
        info: {
            phone: '+7 (926) 433-14-16',
            callPhone: 'tel:+79264331416'
        },
        sectionInstagram: {
            instagramItems: [
                {
                    imgUrl: './img/work/work-1.png', alt: 'image'
                },
                {
                    imgUrl: './img/work/work-2.png', alt: 'image'
                },
                {
                    imgUrl: './img/work/work-3.png', alt: 'image'
                },
                {
                    imgUrl: './img/work/work-4.png', alt: 'image'
                }
            ]
        },
    },
    _callSubscriber() {
        console.log('change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.sectionInstagram = instagramReducer(this._state.sectionInstagram, action);

        this._callSubscriber(this._state);
    }
}



export default store;