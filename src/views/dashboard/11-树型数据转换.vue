<template>
    <div>
      <!-- 树形数据转换 -->
      <!-- 需求：  广州市  id  1   pid:''
                  深圳市   id  2   pid:''
                  白云区   id:1-1   pid:1
            转换成树形结构：
               [{city:'广州市',id:1,pid:'',children:[{city:'白云区',id:'1-1',pid:1}]},{city:'深圳',id:2,pid:''}]
  
      -->
    </div>
  </template>
  <script>
  export default {
    created() {
      const list = [
        { city: '广州市', id: 1, pid: '' },
        { city: '深圳市', id: 2, pid: '' },
        { city: '白云区', id: '1-1', pid: 1 }
      ]
      console.log(this.changeData(list, ''))
    },
    methods: {
      changeData(arr, pid) {
        // 1:将第一层的数据找出来
        // 2:给找出来的第一层数据每一项加一个children字段
        // 3:将该方法改造成可找出任意项的子集的方法
        // 4:将item.children=封装的方法调用(arr,item.id) 自己子集的pid是自己的id
        return arr.filter((item) => {
          if (item.pid === pid) {
            item.children = this.changeData(arr, item.id)
            return true
          } else {
            return false
          }
        })
      }
    }
  }
  </script>
  <style></style>