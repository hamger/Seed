import Seed from './data-dirver'
import template from './template'
import Router from '#'
// 为DD添加操作dom的插件（在DD的原型上添加一些方法）
Seed.use(template)

export { Router }
export default Seed
