<template>
  <div>
    <!-- 写一个axios请求的封装
    1:解决跨域问题：跨域浏览器
    2：request.js封装，加入统一拦截器
    -->
    <button @click="btnClick">调用接口</button>
    <el-date-picker type="date" placeholder="选择日期" />
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <hr />
    <div class="xxx">
      Hello

      <div class="xxx2"></div>
      <div class="xxx3"></div>
    </div>

    <hr />
    <!-- svg图标:
    svg-icon  iconClass='svg图标名'    
    -->
    <svg-icon iconClass="dashboard" style="font-size: 40px"></svg-icon>
    <svg-icon iconClass="table"></svg-icon>
  </div>
</template>
<script>
import { sysLogin } from '@/api/home'
export default {
  methods: {
    async btnClick() {
      const res = await sysLogin({
        mobile: '13800000002',
        password: '123456'
      })
      console.log(res)
    }
  }
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<style lang="scss">
// 定义变量
$color: red;
.xxx {
  color: $color;
  &2 {
    width: 100px;
    height: 100px;
    background-color: #f00;
  }
}
// 嵌套
// &代表父级
// 混入:定义方法使用
@mixin setWH($w, $h) {
  width: $w;
  height: $h;
}
.xxx3 {
  @include setWH(50px, 50px);
  background-color: #00f;
}
// 继承
%border {
  border: 5px solid #000;
}
.xxx2,
.xxx3 {
  @extend %border;
}
</style>
