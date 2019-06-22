import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:5000",
    timeout:1000
});

export const uploadImage = image => {
    return instance
    .post('images/upload', {
        base64: image
    })
    .then(res => {
        console.log("Uploud Sucess de = "+image )
    })
}