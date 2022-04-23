<template>
  <el-select class="choose"
             v-model="value"
             placeholder="请选择"
             @change="handleChange"
             :size="size">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
</template>

<script setup>
  import { getProject, setProject } from '@/utils/auth';
  const  props = defineProps({
    // 输入框尺寸 medium/small/mini
    size: {
      type: String,
      default: 'small',
    }
  })
  const projectId = getProject() * 1 || ''
  const value = ref(projectId)
  const options = [
    {
      value: 1,
      label: '新物集'
    },
    {
      value: 2,
      label: '买本本'
    }
  ]
  const emits = defineEmits()

  function handleChange(val) {
    setProject(val)
    emits('changeProject', { id: val })
  }
</script>

<style scoped>
  .choose {
    margin-right: 50px;
  }
</style>
