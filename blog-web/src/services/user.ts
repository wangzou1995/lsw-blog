import request from '@/util/request'

export function getUserInfo () {
  return request.get('/userinfo')
}
