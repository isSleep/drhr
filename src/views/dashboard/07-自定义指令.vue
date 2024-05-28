<template>
    <!--
    v-text
    v-on....
    自定义指令
      1：全局自定义指令
         Vue.directive('指令名',{指令的生命周期})
         inserted:指令所在标签渲染完成后执行
         componentUpdated:指令所在组件更新完成时执行
      2：局部自定义指令
         directives:{
          指令名:{指令的生命周期}
         }
      自定义指令使用 v-on:keyup.enter='fn'
                    v-指令名:属性名.修饰符="值"
      v-text="值"
   -->
    <div>
      <div v-drtext="msg">123</div>
      <h3 v-text="msg" />
      <button @click="msg = Math.random() * 999">修改msg</button>
    </div>
  </template>
  <script>
  export default {
    directives: {
      drtext: {
        inserted(dom, obj) {
          console.log(dom, obj)
          dom.innerText = obj.value
        },
        componentUpdated(dom, obj) {
          dom.innerText = obj.value
        }
      }
    },
    data() {
      return {
        msg: 'hello'
      }
    }
  }
  </script>
  <style></style>