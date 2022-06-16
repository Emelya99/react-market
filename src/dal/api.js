import * as axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://625187db2dc339451d2ef136.mockapi.io/'
})

export const instagramAPI = {
    async getInstagramItems(previewPhoto) {
        try {
            const response = await instance.get(`instagramItems?page=1&limit=${previewPhoto}`);
            return response.data;
        } catch(error) {
            console.error(error);
        } finally {
            console.log("Finally getInstagramItems")
        }
    },
    async loadMoreInstagramItems(count) {
        try {
            const response = await instance.get(`/instagramItems?page=1&limit=${count}`);
            return response.data;
        } catch(error){
            console.error(error);
        } finally {
            console.log("Finally loadMoreInstagramItems")
        }
    }
}