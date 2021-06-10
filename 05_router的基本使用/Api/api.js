import axios from 'axios'

//02_代理设置
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

//03_Github搜索框
export const getUsers = (keyWords) =>axios.get(`/api3/search/users?q=${keyWords}`).then(res =>  res.data.items)
