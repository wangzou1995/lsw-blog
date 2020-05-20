
import Mock from 'mockjs'

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
})
let configArray: never[] = []

// 使用webpack的require.context()遍历所有mock文件
const notMockFolderFiles: __WebpackModuleApi.RequireContext = require.context('@/', true, /_mock.ts$/)
const mockFolderFiles: __WebpackModuleApi.RequireContext = require.context('@/mock', true, /\.ts$/)

mockFolderFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  configArray = configArray.concat(mockFolderFiles(key).default)
})

notMockFolderFiles.keys().forEach((key) => {
  configArray = configArray.concat(notMockFolderFiles(key).default)
})
// 注册所有的mock服务
configArray.forEach((item) => {
  for (const [path, target] of Object.entries(item)) {
    const protocol = path.split(/\s+/)
    Mock.mock(
      protocol[1],
      protocol[0].toLowerCase(),
      target)
  }
})
