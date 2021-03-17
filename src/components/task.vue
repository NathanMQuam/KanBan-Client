<template>
  <div class="Task">
    {{ task.name }}
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Task',
  props: {
    task: Object
  },
  setup() {
    const state = reactive({

    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
