// 全局自定义指令：解决图片加载出错问题
// 如果使用本地图片资源 ，非在线资源 ，需要使用import导入该资源
import defaultImg from '@/assets/common/head.jpg'
import Vue from 'vue'
Vue.directive('errorimg', {
  // 生命周期
  inserted(dom, obj) {
    dom.src = dom.src || obj.value || defaultImg
    // if (!dom.src) {
    //   dom.src =
    //     'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
    // }
    // 这是一个图片加载出错的监听事件
    dom.onerror = () => {
      console.log('图片加载出错了')
      dom.src = obj.value || defaultImg
    }
  },
  componentUpdated(dom, obj) {
    dom.src = dom.src || obj.value || defaultImg
  }
})
