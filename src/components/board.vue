<template>
  <div class="board">
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Board',
  setup() {
    const state = reactive({
      name: '',
      description: '',
      creatorId: ''
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
