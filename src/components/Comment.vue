<template>
  <div class="Comment card">
    {{ comment.name }}
    <br />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed } from 'vue'
export default {
  name: 'Comment',
  props: {
    comment: Object
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user)

    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
