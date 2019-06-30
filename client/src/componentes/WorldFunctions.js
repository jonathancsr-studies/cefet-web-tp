import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:5000",
    timeout:1000
});

export const uploadImage = image => {
    return instance
    .post('images/upload', {
        base64: image.base64,
        id_user: image.id_user
    })
    .then(res => {
        console.log("Uploud Sucess = "+ image.id_user )
    })
}

export const getAllImages = user => {
    instance.defaults.timeout = 5000
    return instance
    .post('images/findAll', {
        id_user: user.id_user
    })
    .then(res => {
        return res;
    })
}