import sxRequest from '..'

sxRequest
  .request({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res)
  })
