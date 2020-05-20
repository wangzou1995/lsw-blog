import request from '@/util/request'

export function getMenu () {
  return request.get('/getmenu')
}
