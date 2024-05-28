<template>
    <div class="son">
      <h3>我是子组件</h3>
      <div>{{ money }}</div>
      <button @click="btnClick">修改money</button>
    </div>
  </template>
  <script>
  export default {
    props: {
      money: {
        type: Number,
        required: true
      }
    },
    methods: {
      btnClick() {
        this.$emit('update:money', this.money + 1)
      }
    }
  }
  </script>
  <style scoped>
  .son {
    width: 300px;
    height: 300px;
    background-color: #f00;
  }
  </style>