import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000
  });

export const skyType = sky => {
    return instance
    .post('w/register', {
        
    })
    .then(res => {
        console.log("Registered")
    })
}

export const login = user => {
    return instance
    .post('users/login',{
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}