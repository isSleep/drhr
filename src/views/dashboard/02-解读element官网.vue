<template>
  <div>
    <h3>{{ val }}</h3>
    <el-input ref="xxx" v-model="val" type="text" @focus="focusEvent">
      <template #prefix>
        <div>输入框头部内容</div>
      </template>
    </el-input>
    <button @click="btnClick">调用el-input内的focus方法</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      val: ''
    }
  },
  methods: {
    focusEvent () {
      console.log('focusEvent')
    },
    btnClick () {
      this.$refs.xxx.focus()
    }
  }
}
</script>
<style></style>
