import * as axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://625187db2dc339451d2ef136.mockapi.io/'
})

export const instagramAPI = {
    getInstagramItems(previewPhoto) {
        return instance.get(`instagramItems?page=1&limit=${previewPhoto}`)
        .then(response => {
            return response.data;
        })
    },
    loadMoreInstagramItems(count) {
        return instance.get(`/instagramItems?page=1&limit=${count}`)
        .then(response => {
            return response.data;
        })
    }
}