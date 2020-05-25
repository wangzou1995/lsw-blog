import request from '@/util/request'

export function getContentImage () {
  return request.get('/content/get_images')
}
export function getContentCards () {
  return request.get('/content/get_cards')
}
