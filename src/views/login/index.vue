<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils'
import type { FormRules } from 'element-plus'
const router = useRouter()
const useStore = useUserStore()
const form = reactive({
  username: 'admin',
  password: '111111',
})
const loginForms = ref()
// 表单校验
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 10, message: '长度至少6位', trigger: 'change' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '长度至少6位', trigger: 'change' },
  ],
})

// 登录
const loading = ref<boolean>(false)
const login = async () => {
  await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(form)
    router.replace('/')
    ElNotification({
      type: 'success',
      message: `${getTime()}好！`,
    })
    loading.value = false
  } catch (error) {
    ElNotification({
      type: 'error',
      message: error as string,
    })
    loading.value = false
  }
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form
          class="login_form"
          :model="form"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              :prefix-icon="Lock"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="login"
              class="login_btn"
              type="primary"
              size="default"
              :loading="loading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 40px;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      font-size: 40px;
      color: white;
    }

    h2 {
      margin: 20px 0;
      font-size: 20px;
      color: white;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
