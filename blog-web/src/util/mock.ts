// 首先引入Mock
const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
});

let configArray:  { [key: string]: any } [] = [];

// 使用webpack的require.context()遍历所有mock文件
let notMockFolderFiles: __WebpackModuleApi.RequireContext,
  mockFolderFiles:__WebpackModuleApi.RequireContext;
mockFolderFiles = require.context('../../src/mock', true, /\.ts$/);
notMockFolderFiles = require.context('../../src', true, /_mock.ts$/);
mockFolderFiles.keys().forEach((key) => {
  if (key === './index.ts') return;
  configArray = configArray.concat(mockFolderFiles(key).default);
});
notMockFolderFiles.keys().forEach((key) => {
  configArray = configArray.concat(notMockFolderFiles(key).default);
});

console.log(configArray);

// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split(/\s+/);
    Mock.mock(
      protocol[1],
      protocol[0].toLowerCase(),
      target);
  }
});

