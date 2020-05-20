// 测试数据
import { Route, User } from '@/components/layout/data'

const menu: Route [] = [
  {
    id: '1',
    icon: 'el-icon-location',
    name: '发现',
    children: [
      {
        id: '1-1',
        icon: 'el-icon-location',
        name: '发现1',
        children: [
          {
            id: '1-1-1',
            icon: 'el-icon-location',
            name: '发现11'
          }
        ]
      }
    ]
  },

  {
    id: '2',
    icon: 'el-icon-location',
    name: '消息'
  }
]
const user: User = {
  username: 'admin1',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
}
const images: string[] = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
]
function getMenu () {
  return {

    data: menu
  }
}

function getUser () {
  return {
    data: user
  }
}
function getImages () {
  return {
    data: images
  }
}
export default {
  'GET /getmenu': getMenu,
  'GET /userinfo': getUser,
  'GET /content/get_images': getImages
}
