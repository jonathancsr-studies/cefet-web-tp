import axios from 'axios'
const userId = window.location.href.split('World')[1]
const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000
  });

export const skyType = () => {
    return instance
    .post('/widgetsHasAtts/findSky/', {
        id_user: userId,
    })
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(err => {
        console.log(userId)
        
        console.log(err)
    })
}