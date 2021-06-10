import axios from 'axios'

export const getStudentInfo = () => axios.get('/api1/students').then(res => {
    console.log('成功了', res.data)
},
    error => {
        console.log('失败了', error)
    })
export const getCarInfo = () => axios.get('/api2/cars').then(res => {
    console.log('成功了', res.data)
},
    error => {
        console.log('失败了', error)
    })