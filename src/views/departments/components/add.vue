<template>
  <el-dialog
    :title="mode === 'add' ? '新增部门' : '编辑部门'"
    width="600px"
    :visible.sync="show"
  >
    <!-- el-form  label-width:设置整个标题宽度
            el-form-item
                 label:标题

          表单验证：
              el-form
                  ref='xxx'
                  model:整个表单元素的值
                  rules:规则绑定
                       {
                        prop的值:[
                          {required:true,message:'错误信息',trigger:'change/blur'},
                          {min:最小长度,max:'最大长度',message:'错误信息',trigger:'change/blur'},
                          {pattern:正则，message:'错误信息',trigger:'change/blur'}
                        ]
                       }
                  el-form-item
                       prop="表单元素值的字段名"

                 this.$refs.xxx.validate((result)=>{
                     result:true,false
                 })
    -->
    <el-form ref="form" label-width="100px" :model="form" :rules="rules">
      <el-form-item prop="name" label="部门名称">
        <el-input v-model="form.name" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item prop="code" label="部门编码">
        <el-input v-model.trim="form.code" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item prop="manager" label="部门负责人">
        <!-- el-select
                    el-option
                         label:显示的内容 v-model="form."
                         value:选中该项后的值
          -->
        <!-- 1:获取部门员工列表 定义api,导入api,调用api
             2：存储并渲染员工列表  获取数据并存储渲染
        -->
        <el-select v-model="form.manager">
          <el-option label="男" value="1" />
          <el-option label="女" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item prop="introduce" label="部门介绍">
        <el-input
          v-model="form.introduce"
          placeholder="1-300个字符"
          type="textarea"
          :rows="3"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div style="text-align: center">
        <el-button>取消</el-button>
        <!--
          新增功能实现
          1：调用新增接口  定义接口api  导入api  在表单验证通过后调用api
          2:调用成功 提示一下 关闭弹窗 刷新父级列表
          3：新增弹框内的表单数据需要清空一下，
         -->
        <el-button
          type="primary"
          :loading="loading"
          @click="submit"
        >确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script>
import { sysUserSimple, companyDepartmentPost } from '@/api/departments'
export default {
  props: {
    initList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mode: 'add', // add:新增  edit:编辑
      loading: false,
      show: false,
      test: '1',
      form: {
        name: '', //	string	非必须		部门名称
        code: '', //	string	非必须		部门编码，同级部门不可重复
        manager: '', //	string	非必须		负责人名称
        introduce: '', //	string	非必须		介绍
        pid: '' //	string	非必须		父级部门ID
      },
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'change' },
          { min: 1, max: 50, message: '请输入1-50个字符', trigger: 'change' },
          {
            // 需求：当前要添加的部门的同级部门不能产生同名的
            // 1：找出当前要添加的部门的全部同级部门
            // 2:比较找出的同级部门每一项的name不能与value相同
            validator: (rule, value, callback) => {
              const newArr = this.initList.filter((item) => {
                return item.pid === this.form.pid
              })
              const bol = newArr.every((item) => {
                return item.name !== value
              })
              if (bol) {
                callback()
              } else {
                callback(new Error('重复的部门名称:' + value))
              }
            },
            trigger: 'change'
          }
        ],
        code: [
          { required: true, message: '请输入部门编码', trigger: 'change' },
          { min: 1, max: 50, message: '请输入1-50个字符', trigger: 'change' },
          {
            validator: (rule, value, callback) => {
              // 需求：当前vlaue的值不与其它任意项的组织架构的code相同
              // 1：拿到其它所有项的组织架构的数据
              // 2:判断数组中的每一项的code是否与value相等
              // 数组新方法：返回值= arr.every(item=> {return 条件})   每一项都满足需求，返回值为true,只要一个项不满足就返回false
              const bol = this.initList.every((item) => {
                return item.code !== value
              })
              if (bol) {
                callback()
              } else {
                callback(new Error('重复的code:' + value))
              }
            },
            trigger: 'change'
          }
        ],
        manager: [
          { required: true, message: '请选择部门负责人', trigger: 'change' }
        ],
        introduce: [
          { required: true, message: '请输入部门介绍', trigger: 'change' },
          { min: 1, max: 300, message: '请输入1-300个字符', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    // this.getUserList()
  },
  methods: {
    // 获取员工列表
    async getUserList() {
      if (this.userList.length === 0) {
        const res = await sysUserSimple()
        this.userList = res.data
        console.log('员工列表', res)
      }
    },
    submit() {
      this.$refs.form.validate(async(result) => {
        if (result) {
          this.loading = true
          await companyDepartmentPost(this.form)
          this.loading = false
          // 提示用户
          this.$message.success('新增部门成功')
          // 弹窗关闭
          this.show = false
          // 刷新父级列表（调用父级的一个getData方法）
          this.$emit('getData')
          // 重置表单
          this.$refs.form.resetFields()
        }
        console.log(result)
      })
    }
  }
}
</script>
<style></style>
