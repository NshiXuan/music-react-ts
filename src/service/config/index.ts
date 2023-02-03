// 1.手动切换
export const BASE_URL = 'http://codercba.com:9002'
export const TIME_OUT = 10000

// 2.依赖当前环境： webpack提供的process.env.NODE_ENV可以获取development/production
// 本地开发localhost 可以获取到development
// 打包后运行在服务器或者本地localhost 可以获取到production
// console.log(process.env.NODE_ENV)
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.com:9002'
// } else {
//   BASE_URL = 'http://codercba.com:9002'
// }

// export { BASE_URL }

// 3.依赖环境变量配置文件.env
// const BASE_URL = ''

// console.log(process.env.REACT_APP_BASE_URL)

// export { BASE_URL }
