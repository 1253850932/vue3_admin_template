<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'

import {
  reqHasTrademark,
  reqAddOrUpdateTrademark,
} from '@/api/product/trademark'
import type { UploadProps } from 'element-plus'
import type { records, resTrademarkPaging } from '@/api/product/type'
import { ElMessage } from 'element-plus'
// 当前页码
const currentPage = ref<number>(1)
// 每一页展示多少数据
const pageSize = ref<number>(5)
// 存储已有品牌数据总数
const total = ref<number>(0)
const trademarkArr = ref<records[]>()
const background = ref<boolean>(false)
const disabled = ref<boolean>(false)

const handleSizeChange = (val: number) => {
  pageSize.value = val
  currentPage.value = 1
  getHasTrademark()
}
const handleCurrentChange = (val: number) => {
  currentPage.value = val
  getHasTrademark()
}

const getHasTrademark = async () => {
  const res: resTrademarkPaging = await reqHasTrademark(
    pageSize.value,
    currentPage.value,
  )
  total.value = res.data.total
  trademarkArr.value = res.data.records
  console.log(trademarkArr.value)
}
onMounted(() => {
  getHasTrademark()
})

// 对话框模块
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const dialogFormTitle = ref<boolean>(true)
const trademarkParams: records = reactive({
  id: undefined,
  logoUrl: '',
  tmName: '',
})
const addTrademark = () => {
  trademarkParams.logoUrl = ''
  trademarkParams.tmName = ''
  trademarkParams.id = undefined
  dialogFormTitle.value = false
  dialogFormVisible.value = true
}

// 上传图片成功之前钩子函数
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (
    rawFile.type === 'image/png' ||
    rawFile.type === 'image/jpeg' ||
    rawFile.type === 'image/gig'
  ) {
    if (rawFile.size / 1024 / 1024 > 4) {
      ElMessage.error('请上传小于4M的图片')
      return false
    }
  } else {
    ElMessage.error('请上传图片！')
    return false
  }
  return true
}
// 上传图片成功之后钩子函数
const handleAvatarSuccess: UploadProps['onSuccess'] = (uploadFile: any) => {
  trademarkParams.logoUrl = uploadFile.data
}
const confirmSub = async () => {
  const res: any = await reqAddOrUpdateTrademark(trademarkParams)
  if (res.code === 200) {
    ElMessage.success('上传成功')
    dialogFormVisible.value = false
    getHasTrademark()
  } else {
    ElMessage.error('上传失败')
    dialogFormVisible.value = false
  }
}
const editTrademark = async (index: any) => {
  dialogFormVisible.value = true
  dialogFormTitle.value = true
  trademarkParams.logoUrl = index.row.logoUrl
  trademarkParams.tmName = index.row.tmName
  trademarkParams.id = index.row.id
}
</script>

<template>
  <el-card class="box-card" style="margin: 10px">
    <el-button type="primary" size="default" icon="Plus" @click="addTrademark">
      添加品牌
    </el-button>
    <el-table style="margin: 10px 0" border :data="trademarkArr">
      <el-table-column prop="id" label="序号" width="70" />
      <el-table-column prop="tmName" label="品牌名称" width="180" />
      <el-table-column prop="logoUrl" label="品牌LOGO" width="380">
        <template #default="scope">
          <div>
            <img
              :src="scope.row.logoUrl"
              alt="未有图片"
              style="width: 100px; height: 100px"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="品牌操作" width="180">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            icon="Edit"
            @click="editTrademark(scope)"
          ></el-button>
          <el-button type="primary" size="small" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 20]"
      :disabled="disabled"
      :background="background"
      layout=" prev, pager, next, jumper,->,total, sizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>

  <el-dialog
    v-model="dialogFormVisible"
    :title="dialogFormTitle ? '修改品牌' : '添加品牌'"
  >
    <el-form :model="trademarkParams">
      <el-form-item label="品牌名称" :label-width="formLabelWidth">
        <el-input autocomplete="off" v-model="trademarkParams.tmName" />
      </el-form-item>
      <el-form-item label="品牌LOGO" :label-width="formLabelWidth">
        <el-upload
          class="avatar-uploader"
          action="/api/admin/product/fileUpload"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
          :on-success="handleAvatarSuccess"
        >
          <img
            v-if="trademarkParams.logoUrl"
            :src="trademarkParams.logoUrl"
            class="avatar"
          />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmSub">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
